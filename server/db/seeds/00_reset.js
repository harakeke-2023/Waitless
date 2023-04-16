/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('customer_order_items').del()
  await knex('customer_orders').del()
  await knex('menu_items').del()
  await knex('categories').del()
}
