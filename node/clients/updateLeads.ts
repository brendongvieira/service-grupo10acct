import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class updateLeads extends ExternalClient {
  private routes = {
     leads: '/prod/leads/'
  }
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://4wnkgl4pyd.execute-api.sa-east-1.amazonaws.com', context, options)
  }
  

  public async putLeads(cpf: any): Promise<string> {
    console.log(this.routes.leads+cpf)
    return this.http.put(this.routes.leads+cpf, {
      metric: 'leads-put',
    })
  }

  public async getStatusWithHeaders(
    status: number
  ): Promise<IOResponse<string>> {
    return this.http.getRaw(status.toString(), {
      metric: 'status-get-raw',
    })
  }
}