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
      category_name: 'Appetizers',
    },
    {
      id: 2,
      category_name: 'Fried Rice',
    },
    {
      id: 3,
      category_name: 'Noodles',
    },
    {
      id: 4,
      category_name: 'Drinks',
    },
  ])
}
