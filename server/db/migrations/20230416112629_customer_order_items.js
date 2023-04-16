/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('customer_order_items', (table) => {
    table.increments('id').primary()

    table.integer('quantity')
    table.integer('price')
    table.integer('order_id').references('customer_orders.id')
    table.integer('menu_item_id').references('menu_items.id')
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('customer_order_items')
}
