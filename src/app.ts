import 'reflect-metadata'

import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'

import errorHandler from './errors/handler'
import routes from './routes'
import './database/connection'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(routes)
app.use(errorHandler)

export default app
