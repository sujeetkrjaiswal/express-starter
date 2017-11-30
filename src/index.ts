import * as express from 'express'

import * as morgan from 'morgan'
import * as compression from 'compression'
import * as cors from 'cors'
import * as helmet from 'helmet'

import api from './api'

class Server{
  public app: express.Application

  public static bootstrap(): Server {
    return new Server()
  }

  constructor() {
    this.app = express()
    this.config()
    this.api()
    this.routes()
  }

  config() {
    this.app.use(morgan('common'))
    this.app.use(cors())
    this.app.use(compression())
    this.app.use(helmet())
  }

  api() {
    this.app.use('/api', api)
  }

  routes() {
    this.app.use('/*', express.static('public'))
  }
}
