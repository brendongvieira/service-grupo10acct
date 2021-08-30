import { IOClients } from '@vtex/api'
// import { OMS } from '@vtex/clients'

import ListLeads from './listLeads'
import UpdateLeads from './updateLeads'
import Orders from './orders'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get listLeads() {
    return this.getOrSet('listLeads', ListLeads)
  }
  public get updateLeads() {
    return this.getOrSet('updateLeads', UpdateLeads)
  }
  public get orders() {
    return this.getOrSet('orders', Orders)
  }
}
