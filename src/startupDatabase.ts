import { createConnection } from 'typeorm'

import Company from './models/Company'
import companiesJson from './companies.json'

interface CompanyInJson {
  name: string
  about: string
  logo: string
}

const companies: CompanyInJson[] = companiesJson

async function start() {
  const connection = await createConnection()

  await connection.runMigrations()

  const companiesRepository = connection.getRepository(Company)

  const companiesToSave = companies.map(company => {
    return companiesRepository.create(company)
  })

  await companiesRepository.save(companiesToSave)
}

start()
