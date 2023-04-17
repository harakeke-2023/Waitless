import knex from 'knex'
import config from './knexfile'
const testDb = knex(config.test)

import * as db from './customerOrders'
import {
  // OrderDetails,
  CustomerOrderDb,
  // CustomerOrder,
} from '../../models/CustomerOrders'

jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

// getAllCustomerOrdersWithDetails

describe('get all customer order with details', () => {
  it('returns the order detail', async () => {
    const orders = await db.getAllCustomerOrdersWithDetails(testDb)
    expect(orders).toBe(1)
  })
})

// addCustomerOrder
describe('addNewOrder', () => {
  it('adds a new order', async () => {
    const newOrder = {
      total_cost: 100,
      customer_name: 'Guy Incognito',
      customer_email: 'thismanismy@exact.double',
      table_number: 1,
      order_details: [{ menu_item_id: 2, quantity: 3, price: 78 }],
    } as CustomerOrderDb

    await db.addCustomerOrder(newOrder, testDb)
    const newOrderAdd = await db.getAllCustomerOrdersWithDetails(testDb)

    const newItemAdd = newOrderAdd[newOrderAdd.length - 1]
    expect(newItemAdd.total_cost).toBe(100)
    expect(newItemAdd.customer_name).toBe('Guy Incognito')
    expect(newItemAdd.customer_email).toBe('thismanismy@exact.double')
    expect(newItemAdd.table_number).toBe(1)
    expect(newItemAdd.order_details).toBe([
      { menu_item_id: 2, quantity: 3, price: 78 },
    ])
  })
})
