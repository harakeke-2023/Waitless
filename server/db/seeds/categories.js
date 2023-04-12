/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('menu_items').del()
  await knex('categories').del()
  await knex('categories').insert([
    {
      id: 1,
      category_name: 'Starters',
    },
    {
      id: 2,
      category_name: 'Mains',
    },
    {
      id: 3,
      category_name: 'Desserts',
    },
    {
      id: 4,
      category_name: 'Drinks',
    },
  ])
}
