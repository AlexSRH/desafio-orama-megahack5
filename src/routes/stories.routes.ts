import { Router } from 'express'
import { getRepository } from 'typeorm'

import Company from '../models/Company'

const storiesRouter = Router()

storiesRouter.get('/', async (request, response) => {
  const companiesRepository = getRepository(Company)

  const followedCompanies = await companiesRepository.find({
    where: {
      following: true
    }
  })

  return response.json(followedCompanies)
})

export default storiesRouter
