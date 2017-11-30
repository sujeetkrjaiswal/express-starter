import { Router } from 'express'

import content from './content'
import search from './search'

const apiRouter = Router()

apiRouter.use('/content', content)
apiRouter.use('/search', search)


export default apiRouter


