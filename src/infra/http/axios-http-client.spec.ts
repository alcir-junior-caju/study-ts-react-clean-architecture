import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from '@infra/http'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct URL and Verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()

    await sut.post({ url })

    expect(mockedAxios.post).toHaveBeenCalledWith(url)
  })
})
