import { Router, Request, Response, NextFunction } from 'express'
import { log, logError, logInfo, logSuccess } from '../helpers/logger'

const contentRouter: Router = Router()

contentRouter.use((req: Request, res: Response, next: NextFunction) => {
  logInfo(`Content API ${Date.now()}`)
  next()
})

contentRouter.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    statusCode: 200,
    msg: 'Index API under content',
  })
})

contentRouter.get('/about', (req: Request, res: Response) => {
  res.send('About the content API')
})

export default contentRouter
