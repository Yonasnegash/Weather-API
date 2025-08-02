import rateLimit from "express-rate-limit";

const apiLmiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: true,
    message: {
        message: 'Too many requests from this IP, please try again later.'
    }
})

export default apiLmiter