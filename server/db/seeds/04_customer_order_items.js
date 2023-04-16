/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex('customer_order_items').insert([
    { id: 1, order_id: 1, menu_item_id: 1, quantity: 1, price: 4 },
    { id: 2, order_id: 1, menu_item_id: 5, quantity: 1, price: 4 },
    { id: 3, order_id: 2, menu_item_id: 7, quantity: 1, price: 4 },
    { id: 4, order_id: 3, menu_item_id: 9, quantity: 3, price: 30 },
    { id: 5, order_id: 4, menu_item_id: 15, quantity: 3, price: 30 },
  ])
}
