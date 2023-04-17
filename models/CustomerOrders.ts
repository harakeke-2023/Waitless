import * as z from 'zod'

export type OrderDetails = {
  menu_item_id: number
  quantity: number
  price: number
}

export type CustomerOrderDb = {
  total_cost: number
  customer_name: string
  customer_email: string
  table_number: number
  order_details: OrderDetails[]
}

export type CustomerOrder = CustomerOrderDb & {
  id: number
}
