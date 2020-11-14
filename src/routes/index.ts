import { Router } from 'express'

import companyRouter from './company.routes'
import storiesRouter from './stories.routes'

const routes = Router()

routes.use('/companies', companyRouter)
routes.use('/stories', storiesRouter)

export default routes
