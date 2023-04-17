import * as mockKnex from 'mock-knex'
import { addCustomerOrder } from './customerOrders'

describe('addCustomerOrder', () => {
  const dbMock = mockKnex.from('customer_orders')

  afterEach(() => {
    dbMock.mock.reset()
  })

  it('inserts a new customer order and order details', async () => {
    const newCustomerOrder = {
      total_cost: 50,
      customer_name: 'John',
      customer_email: 'john@example.com',
      table_number: 2,
      order_details: [
        { quantity: 1, price: 10, menu_item_id: 1 },
        { quantity: 2, price: 15, menu_item_id: 2 },
      ],
    }

    // Mock the insert method to return the new order ID
    dbMock.insert.mockReturnValueOnce([1])

    await addCustomerOrder(newCustomerOrder, dbMock)

    expect(dbMock.insert).toHaveBeenCalledTimes(3)
    expect(dbMock.insert.mock.calls[0][0]).toEqual({
      total_cost: 50,
      customer_name: 'John',
      customer_email: 'john@example.com',
      table_number: 2,
    })
    expect(dbMock.insert.mock.calls[1][0]).toEqual({
      order_id: 1,
      quantity: 1,
      price: 10,
      menu_item_id: 1,
    })
    expect(dbMock.insert.mock.calls[2][0]).toEqual({
      order_id: 1,
      quantity: 2,
      price: 15,
      menu_item_id: 2,
    })
  })
})
