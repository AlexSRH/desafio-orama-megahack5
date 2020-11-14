import { EntityRepository, Repository } from 'typeorm'

import Company from '../models/Company'

@EntityRepository(Company)
export default class CompaniesRepository extends Repository<Company> {
  public async follow(companyId: string): Promise<Company> {
    const company = await this.findOne(companyId)

    if (!company) {
      throw new Error('Company does not exist')
    }

    company.following = true

    await this.save(company)

    return company
  }

  public async unFollow(companyId: string): Promise<Company> {
    const company = await this.findOne(companyId)

    if (!company) {
      throw new Error('Company does not exist')
    }

    company.following = false

    await this.save(company)

    return company
  }
}
