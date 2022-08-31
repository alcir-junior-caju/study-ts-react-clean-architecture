import { faker } from '@faker-js/faker'
import { HttpPostParams } from '@data/protocols'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.science.chemicalElement()
})
