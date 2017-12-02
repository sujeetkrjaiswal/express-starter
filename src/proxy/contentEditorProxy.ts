import { Application } from 'express'
import * as expressHttpProxy from 'express-http-proxy'
import * as bodyParser from 'body-parser'


import { CONTENT_PROXY_URL } from '../helpers/environmentVariablesHelper'

export const proxyMW = (app: Application) => {

  app.use('/content/preview/*', expressHttpProxy(CONTENT_PROXY_URL, {

  }))
}
