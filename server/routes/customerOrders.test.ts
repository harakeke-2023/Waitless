import request from 'supertest'
import server from '../server'
import * as db from '../db/customerOrders'

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
    // expect(response.body).toEqual({ orderId: 1 })
  })
})
