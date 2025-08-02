import Redis from "ioredis";
import dotenv from 'dotenv'

dotenv.config()

const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : undefined
})

redis.on('connect', () => {
    console.log('Connected to Redis')
})

redis.on('error', (error) => {
    console.log('Redis connection error:', error)
})

export default redis