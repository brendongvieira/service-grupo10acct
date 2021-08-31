import { IOClients } from '@vtex/api'
import { OMS } from '@vtex/clients'


import ListLeads from './listLeads'
import UpdateLeads from './updateLeads'



// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get listLeads() {
    return this.getOrSet('listLeads', ListLeads)
  }
  public get updateLeads() {
    return this.getOrSet('updateLeads', UpdateLeads)
  }
  public get oms() {
    return this.getOrSet('oms', OMS)
  }

  
}
