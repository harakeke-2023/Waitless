import request from 'supertest'
import server from '../server'
import * as db from '../db/customerOrders'

jest.mock('../db/customer_orders')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Get /api/v1/admin/orders', () => {
  it('responds with all customer orders', async () => {
    jest.mock('../db/customer_orders', () => ({
      getAllCustomerOrdersWithDetails: jest.fn(() =>
        Promise.resolve([
          {
            table_number: 2,
            customer_name: 'Jane',
            customer_email: 'jane@gmail.com',
            total_cost: 70,
          },
          {
            table_number: 3,
            customer_name: 'Jay',
            customer_email: 'jay@gmail.com',
            total_cost: 70,
          },
        ])
      ),
    }))

    const res = await request(server)
      .get('/api/v1/admin/orders')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body.orders).toHaveLength(2)
    expect(res.body.orders[1].total_cost).toBe(70)
  })
})
