import axios from 'axios'
import { faker } from '@faker-js/faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue({
    status: faker.random.numeric(),
    data: faker.science.chemicalElement()
  })

  return mockedAxios
}
