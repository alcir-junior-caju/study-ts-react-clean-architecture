import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from '@infra/http'
import { HttpPostParams } from '@data/protocols'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.science.chemicalElement()
})

describe('AxiosHttpClient', () => {
  it('should call axios with correct URL and Verb and values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()

    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
