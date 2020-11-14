import 'reflect-metadata'

import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import morgan from 'morgan'
import path from 'path'

import errorHandler from './errors/handler'
import routes from './routes'
import './database/connection'

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(routes)
app.use('/static', express.static(path.join(__dirname, '..', 'uploads')))

app.use(errorHandler)

export default app
