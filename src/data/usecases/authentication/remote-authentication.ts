import { HttpPostClient, HttpStatusCode } from '@data/protocols'
import { AuthenticationParams } from '@domain/usecases'
import { InvalidCredentialsError } from '@domain/errors'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()

      default:
        return await Promise.resolve()
    }
  }
}
