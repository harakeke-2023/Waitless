import knex from 'knex'
import config from './knexfile'
const testDb = knex(config.test)

import * as db from './customerOrders'
import {
  // OrderDetails,
  CustomerOrderDb,
  CustomerOrderWithName,
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
    const orders = (await db.getAllCustomerOrdersWithDetails(
      testDb
    )) as CustomerOrderWithName[]
    expect(orders).toHaveLength(4)
    expect(orders[0].order_details[0].menu_item_name).toBe(
      'Vegetarian Fried Rice'
    )
  })
})

// addCustomerOrder
describe('addNewOrder', () => {
  it('adds a new order', async () => {
    const newOrder = {
      total_cost: 100,
      customer_name: 'Bort',
      customer_email: 'mysonis@alsonamed.bort',
      table_number: 1,
      order_details: [{ menu_item_id: 2, quantity: 3, price: 78 }],
    } as CustomerOrderDb

    await db.addCustomerOrder(newOrder, testDb)
    const newOrderAdd = await db.getAllCustomerOrdersWithDetails(testDb)

    expect(newOrderAdd).toHaveLength(5)
    expect(
      newOrderAdd?.some(
        (item) => item.customer_email === 'mysonis@alsonamed.bort'
      )
    ).toBe(true)
  })
})
