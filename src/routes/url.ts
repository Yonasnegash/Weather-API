import { Router } from 'express'
import { getWeatherData } from '../controller/weather.controller'

const router = Router()

router.get('/:location', getWeatherData)

export default router