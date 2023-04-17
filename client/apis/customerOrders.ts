import request from 'superagent'
import { CustomerOrderDb } from '../../models/CustomerOrders'

const rootUrl = '/api/v1'

export async function sendCustomerOrder(newCustomerOrder: CustomerOrderDb) {
  const res = await request
    .post(rootUrl + '/customerorders')
    .send(newCustomerOrder)
  return res
}
