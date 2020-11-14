import { Router } from 'express'
import multer from 'multer'
import { getRepository } from 'typeorm'

import uploadConfig from '../config/upload'
import AppError from '../errors/AppError'
import Company from '../models/Company'
import storiesView from '../views/storiesView'

const storiesRouter = Router()

const upload = multer(uploadConfig)

storiesRouter.get('/', async (request, response) => {
  const companiesRepository = getRepository(Company)

  const followedCompanies = await companiesRepository.find({
    where: {
      following: true
    }
  })

  return response.json(storiesView.renderMany(followedCompanies))
})

storiesRouter.post('/', upload.single('stories'), async (request, response) => {
  const { companyId } = request.body
  const { filename } = request.file

  const companiesRepository = getRepository(Company)

  const company = await companiesRepository.findOne(companyId)

  if (!company) {
    throw new AppError('This company does not exist')
  }

  company.stories = filename

  await companiesRepository.save(company)

  return response.json(storiesView.render(company))
})

export default storiesRouter
