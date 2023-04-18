import request from 'superagent'
import { CustomerOrder, CustomerOrderDb } from '../../models/CustomerOrders'

const rootUrl = '/api/v1/'

export async function sendCustomerOrder(newCustomerOrder: CustomerOrderDb) {
  const res = await request
    .post(rootUrl + 'customerorders')
    .send(newCustomerOrder)
  return res
}

export async function getAllCustomerOrders() {
  const res = await request.get(rootUrl + 'customerorders')

  return res.body as CustomerOrder[]
}
