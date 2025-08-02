import express from 'express'
import dotenv from 'dotenv'

import urlRouter from '../src/routes/url.ts'
import apiLmiter from './utils/rateLimiter.ts'

dotenv.config()

const app = express()

app.use(express.json())
app.use('/api/weather', apiLmiter, urlRouter)

export default app