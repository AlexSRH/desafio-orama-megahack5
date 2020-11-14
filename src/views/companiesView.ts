import 'dotenv/config'
import Company from '../models/Company'

export default {
  render(company: Company) {
    return {
      id: company.id,
      name: company.name,
      about: company.about,
      logo: `${process.env.APP_URL}/static/${company.logo}`,
      following: company.following
    }
  },

  renderMany(companies: Company[]) {
    return companies.map(company => this.render(company))
  }
}
