/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('customer_orders', (table) => {
    table.increments('id').primary()
    table.integer('total_cost')
    table.string('customer_name')
    table.string('customer_email')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('customer_orders')
}
