import { Router, Request, Response, NextFunction } from 'express'
import { log, logError, logInfo, logSuccess } from '../helpers/logger'
const searchRouter: Router = Router()

searchRouter.use((req: Request, res: Response, next: NextFunction) => {
  logInfo(`Search API ${Date.now()}`)
  next()
})

searchRouter.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    statusCode: 200,
    msg: 'Index API under Search',
  })
})

searchRouter.get('/about', (req: Request, res: Response) => {
  res.send('About the search API')
})

export default searchRouter
