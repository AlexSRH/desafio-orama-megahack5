import 'dotenv/config'
import Company from '../models/Company'

export default {
  render(company: Company) {
    return {
      id: company.id,
      name: company.name,
      logo: `${process.env.APP_URL}/static/${company.logo}`,
      stories: `${process.env.APP_URL}/static/${company.stories}`
    }
  },

  renderMany(companies: Company[]) {
    return companies.map(company => this.render(company))
  }
}
