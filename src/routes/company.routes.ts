import { Router } from 'express'
import { getRepository, getCustomRepository } from 'typeorm'

import CompaniesRepository from '../repositories/CompaniesRepository'
import Company from '../models/Company'

const companyRouter = Router()

companyRouter.get('/', async (request, response) => {
  const companiesRepository = getRepository(Company)

  const companies = await companiesRepository.find()

  return response.json(companies)
})

companyRouter.get('/:id', async (request, response) => {
  const { id } = request.params

  const companiesRepository = getRepository(Company)

  const companies = await companiesRepository.findOne(id)

  return response.json(companies)
})

companyRouter.post('/', async (request, response) => {
  const { name, image, about } = request.body

  const companiesRepository = getRepository(Company)

  const company = companiesRepository.create({
    name,
    image,
    about
  })

  await companiesRepository.save(company)

  return response.json(company)
})

companyRouter.post('/:id/follow', async (request, response) => {
  const { id } = request.params

  const companiesRepository = getCustomRepository(CompaniesRepository)

  const company = await companiesRepository.follow(id)

  return response.json(company)
})

companyRouter.post('/:id/unfollow', async (request, response) => {
  const { id } = request.params

  const companiesRepository = getCustomRepository(CompaniesRepository)

  const company = await companiesRepository.unFollow(id)

  return response.json(company)
})

export default companyRouter
