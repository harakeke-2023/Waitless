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
    },
    {
      id: 2,
      total_cost: 200,
      customer_name: 'Joey Jo Jo Junior Shabadoo',
      customer_email: 'thatstheworstnameive@ever.heard',
    },
    {
      id: 3,
      total_cost: 400,
      customer_name: 'Brian McGee',
      customer_email: 'stayeduplatelistening@to.queen',
    },
    {
      id: 4,
      total_cost: 400,
      customer_name: 'Lord Thistlewick Flanders',
      customer_email: 'charmed@agoogly.smoogly',
    },
  ])
}
