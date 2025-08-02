import axios from 'axios'
import redis from '../redis/client.redis'
import { Request, Response, NextFunction } from 'express'
export const getWeatherData = async (req: Request, res: Response, next: NextFunction) => {
    const { ttl } = req.query
    const { location } = req.params
    try {
        const locationKey = `location:${location}`

        if (await redis.exists(locationKey)) {
            const cachedData = await redis.get(locationKey)
            if (cachedData !== null) {
                res.status(200).json({
                    message: 'success',
                    data: JSON.parse(cachedData)
                })
                return
            }
        }

        const response = await axios.get(`${process.env.WEATHER_API}/${location}?key=${process.env.WEATHER_API_KEY}`)

        if (ttl && Number(ttl)) {
            await redis.set(locationKey, JSON.stringify(response.data), 'EX', Number(ttl))
        } else {
           await redis.set(locationKey, JSON.stringify(response.data))
        }

        return res.status(200).json({
            message: 'success',
            data: response.data
        })
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
            const status = error.response.status
            const message =
            status === 404
                ? `City '${req.query.city}' not found`
                : 'Third-party API error'

            return res.status(status).json({ message })
            
            } else if (error.request) {
                return res.status(503).json({ message: 'Unable to reach weather API' })
            } else {
                return res.status(500).json({ message: 'Unexpected Axios error' })
            }
        }
        next(error)
    }
}