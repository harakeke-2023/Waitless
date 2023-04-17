import request from 'supertest'
import server from '../server'
import * as db from '../db/customerOrders'

jest.mock('../db/customerOrders', () => ({
  getAllCustomerOrdersWithDetails: jest.fn(() =>
    Promise.resolve([
      { id: 1, total_cost: 50 },
      { id: 2, total_cost: 70 },
    ])
  ),
}))

describe('Get /api/v1/admin/orders', () => {
  it('responds with all customer orders', async () => {
    const res = await request(server)
      .get('/api/v1/admin/orders')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body.orders).toHaveLength(2)
    expect(res.body.orders[1].total_cost).toBe(70)
  })
})
