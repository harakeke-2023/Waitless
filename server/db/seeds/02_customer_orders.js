/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex('customer_orders').insert([
    {
      id: 1,
      total_cost: 100,
      customer_name: 'Guy Incognito',
      customer_email: 'thismanismy@exact.double',
      table_number: 1,
    },
    {
      id: 2,
      total_cost: 200,
      customer_name: 'Joey Jo Jo Junior Shabadoo',
      customer_email: 'thatstheworstnameive@ever.heard',
      table_number: 3,
    },
    {
      id: 3,
      total_cost: 400,
      customer_name: 'Brian McGee',
      customer_email: 'stayeduplatelistening@to.queen',
      table_number: 4,
    },
    {
      id: 4,
      total_cost: 400,
      customer_name: 'Lord Thistlewick Flanders',
      customer_email: 'charmed@agoogly.smoogly',
      table_number: 5,
    },
  ])
}
