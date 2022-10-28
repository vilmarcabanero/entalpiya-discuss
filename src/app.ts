import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import 'express-async-errors'
import { json } from 'body-parser'
import routes from './routes/_index'
import * as S from '@entalpiya/common'

const app = express()

if (process.env.ENVIRONMENT !== 'test') {
  app.use(S.successHandler)
  app.use(S.errorHandlerMorgan)
}

app.set('trust proxy', true)
app.use(json())
app.use('/api/discuss', routes)
app.use((_req, _res, next) => {
  next(new S.NotFoundException(`Cannot ${_req.method} ${_req.originalUrl}`))
})

app.use(S.errorConverter)
app.use(S.errorHandler)

export { app }
