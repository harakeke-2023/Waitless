/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('menu_items', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.decimal('price')
    table.integer('stock')
    table.string('image_url')
    table.integer('category_id').references('categories.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('menu_items')
}
