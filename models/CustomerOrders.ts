export type OrderDetails = {
  menu_item_id: number
  quantity: number
  price: number
}

export type OrderDetailsWithName = {
  menu_item_name: string
  quantity: number
  price: number
}

export type CustomerOrderWithNameDb = {
  total_cost: number
  customer_name: string
  customer_email: string
  table_number: number
  order_details: OrderDetailsWithName[]
}

export type CustomerOrderWithName = CustomerOrderWithNameDb & {
  id: number
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

export type CustomerDetails = {
  name: string
  email: string
}
