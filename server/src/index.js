import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { jwt } from '@elysiajs/jwt'
import connectDB from './config/database.js'
import { authRoutes, testRoutes, userRoutes, questionRoutes, chatbotRoutes } from './routes/index.js'

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'secret'
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || 'refresh-secret'

const app = new Elysia()
  .use(cors({
    origin: true,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  }))
  .use(jwt({ name: 'jwt', secret: ACCESS_TOKEN_SECRET }))
  .use(jwt({ name: 'refreshJwt', secret: REFRESH_TOKEN_SECRET }))
  
  .get('/', () => ({ status: 'online', message: 'Job Quiz API' }))
  
  .get('/health', async () => {
    try {
        await connectDB();
        return { status: 'ok', db: 'connected' }
    } catch (e) {
        return { status: 'error', error: e.message }
    }
  })
  
  .use((app) => {
    const jwtPlugin = app.decorator.jwt
    const refreshJwtPlugin = app.decorator.refreshJwt
    return app
        .use(authRoutes(jwtPlugin, refreshJwtPlugin))
        .use(testRoutes(jwtPlugin))
        .use(userRoutes(jwtPlugin))
        .use(questionRoutes)
        .use(chatbotRoutes)
  })

export default app