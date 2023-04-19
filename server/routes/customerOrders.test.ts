import request from 'supertest'
import server from '../server'
import * as db from '../db/customerOrders'
import { CustomerOrderWithName } from '../../models/CustomerOrders'

jest.mock('../db/customerOrders')

beforeEach(() => {
  jest.clearAllMocks()
})

const addNewOrder = {
  total_cost: 100,
  customer_name: 'Guy Incognito',
  customer_email: 'thismanismy@exact.double',
  table_number: 1,
  order_details: [{ menu_item_id: 2, quantity: 3, price: 78 }],
}

const customerOrderResponse = [
  {
    id: 4,
    total_cost: 78,
    customer_name: 'Bort',
    customer_email: 'mysonis@alsonamed.bort',
    table_number: 1,
    order_details: [{ menu_item_name: 'Food', quantity: 3, price: 78 }],
  },
] as CustomerOrderWithName[]

describe('POST /api/v1/customerorders', () => {
  it('adds a new order', async () => {
    jest.mocked(db.addCustomerOrder).mockImplementation(() => {
      return Promise.resolve()
    })

    await request(server)
      .post('/api/v1/customerorders')
      .send(addNewOrder)
      .expect(201)

    expect(db.addCustomerOrder).toHaveBeenCalledTimes(1)
    expect(db.addCustomerOrder).toHaveBeenCalledWith(addNewOrder)
  })
})

describe('get /api/v1/customerorders', () => {
  it('gets customer orders', async () => {
    jest
      .mocked(db.getAllCustomerOrdersWithDetails)
      .mockImplementation(() => Promise.resolve(customerOrderResponse))

    const res = await request(server).get('/api/v1/customerorders').expect(200)
    const body = res.body as CustomerOrderWithName[]

    expect(db.getAllCustomerOrdersWithDetails).toHaveBeenCalledTimes(1)
    expect(body[0].customer_email).toBe('mysonis@alsonamed.bort')
  })
})
