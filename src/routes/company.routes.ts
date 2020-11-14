import { Router } from 'express'
import multer from 'multer'
import { getRepository, getCustomRepository } from 'typeorm'

import uploadConfig from '../config/upload'
import CompaniesRepository from '../repositories/CompaniesRepository'
import Company from '../models/Company'
import companiesView from '../views/companiesView'
import AppError from '../errors/AppError'

const companyRouter = Router()

const upload = multer(uploadConfig)

companyRouter.get('/', async (request, response) => {
  const companiesRepository = getRepository(Company)

  const companies = await companiesRepository.find()

  return response.json(companiesView.renderMany(companies))
})

companyRouter.get('/:id', async (request, response) => {
  const { id } = request.params

  const companiesRepository = getRepository(Company)

  const company = await companiesRepository.findOne(id)

  if (!company) {
    throw new AppError('Company does not exist')
  }

  return response.json(companiesView.render(company))
})

companyRouter.post('/', upload.single('logo'), async (request, response) => {
  const { name, about } = request.body
  const { filename: logo } = request.file

  const companiesRepository = getRepository(Company)

  const company = companiesRepository.create({
    name,
    logo,
    about
  })

  await companiesRepository.save(company)

  return response.json(companiesView.render(company))
})

companyRouter.put('/:id/follow', async (request, response) => {
  const { id } = request.params

  const companiesRepository = getCustomRepository(CompaniesRepository)

  const company = await companiesRepository.follow(id)

  return response.json(companiesView.render(company))
})

companyRouter.put('/:id/unfollow', async (request, response) => {
  const { id } = request.params

  const companiesRepository = getCustomRepository(CompaniesRepository)

  const company = await companiesRepository.unFollow(id)

  return response.json(companiesView.render(company))
})

export default companyRouter
