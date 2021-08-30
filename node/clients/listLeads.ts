import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class listLeads extends ExternalClient {
  private routes = {
     leads: '/prod/leads'
  }
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://4wnkgl4pyd.execute-api.sa-east-1.amazonaws.com', context, options)
  }

  public async getLeads(): Promise<string> {
    return this.http.get(this.routes.leads, {
      metric: 'leads-get',
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
