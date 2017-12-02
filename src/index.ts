import * as express from 'express'
import * as httpProxy from 'http-proxy'

import * as morgan from 'morgan'
import * as compression from 'compression'
import * as cors from 'cors'
import * as helmet from 'helmet'

import api from './api'

class Server{
  public app: express.Application
  public apiProxy: httpProxy

  public static bootstrap(): Server {
    return new Server()
  }

  constructor() {
    this.apiProxy = httpProxy.createProxyServer()
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
    this.app.use('/', express.static(__dirname + '/public'))
    this.app.get('/test', (req, res) => {
      res.send('Welcome')
    })
  }
}

const app: express.Application = Server.bootstrap().app
app.listen(3000, (err: any) => {
  console.log(err, 'Started app server')
})
