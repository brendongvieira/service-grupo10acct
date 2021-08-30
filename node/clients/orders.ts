import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class updateLeads extends ExternalClient {
  private routes = {
     orders: '/oms/pvt/orders/'
  }
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://myworkspacebrendon--hiringcoders202110.vtexcommercestable.com.br/api', context, options)
  }
  

  public async getOrders(code: any): Promise<string> {
    console.log('ENDERECO DO GETORDERS: ')
      console.log(this.routes.orders+code)
    return this.http.get(this.routes.orders+code, {
      metric: 'orders-get',
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