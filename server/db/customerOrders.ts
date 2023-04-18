import { CustomerOrderDb } from '../../models/CustomerOrders'
import connection from './connection'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<Array> }
 */

export async function addCustomerOrder(
  newCustomerOrder: CustomerOrderDb,
  db = connection
) {
  const {
    total_cost,
    customer_name,
    customer_email,
    table_number,
    order_details,
  } = newCustomerOrder
  const order_id = await db('customer_orders').insert({
    total_cost,
    customer_name,
    customer_email,
    table_number,
  })

  order_details.forEach((orderedItem) => {
    const { quantity, price, menu_item_id } = orderedItem

    db('customer_order_items')
      .insert({
        order_id: order_id[0],
        quantity: quantity,
        price: price,
        menu_item_id: menu_item_id,
      })
      .then((res) => {
        return res
      })
      .catch((error) => {
        console.error(error)
      })
  })
}

export async function getAllCustomerOrdersWithDetails(db = connection) {
  try {
    const orders = await db
      .select(
        'customer_orders.id',
        'customer_orders.total_cost',
        'customer_orders.customer_name',
        'customer_orders.customer_email',
        'customer_orders.table_number'
      )
      .from('customer_orders')
      .orderBy('customer_orders.id', 'desc')

    const orderDetails = await db
      .select(
        'customer_orders.id as order_id',
        'menu_items.name as menu_item_name',
        'customer_order_items.quantity',
        'customer_order_items.price'
      )
      .from('customer_orders')
      .leftJoin(
        'customer_order_items',
        'customer_orders.id',
        'customer_order_items.order_id'
      )
      .leftJoin(
        'menu_items',
        'customer_order_items.menu_item_id',
        'menu_items.id'
      )

    const ordersWithDetails = orders.map((order) => {
      return {
        id: order.id,
        total_cost: order.total_cost,
        customer_name: order.customer_name,
        customer_email: order.customer_email,
        table_number: order.table_number,
        order_details: orderDetails
          .filter((detail) => detail.order_id === order.id)
          .map((detail) => {
            return {
              menu_item_name: detail.menu_item_name,
              quantity: detail.quantity,
              price: detail.price,
            }
          }),
      }
    })

    return ordersWithDetails
  } catch (error) {
    console.error(error)
  }
}
