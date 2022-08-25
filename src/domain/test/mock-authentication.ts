import { faker } from '@faker-js/faker'
import { AuthenticationParams } from 'domain/usecases'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email().toLocaleLowerCase(),
  password: faker.internet.password()
})
