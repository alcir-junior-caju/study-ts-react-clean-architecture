import { HttpPostClient } from 'data/protocols'
import { AuthenticationParams } from 'domain/usecases'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    await this.httpPostClient.post({
      url: this.url,
      body: params
    })
  }
}
