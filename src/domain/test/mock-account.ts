import { faker } from '@faker-js/faker'
import { AuthenticationParams } from '@domain/usecases'
import { AccountModel } from '@domain/models'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email().toLocaleLowerCase(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.alphaNumeric(64)
})
