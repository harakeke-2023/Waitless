/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('menu_items').del()
  await knex('menu_items').insert([
    {
      id: 1,
      name: 'Spring Rolls',
      description: `They ain't summer rolls!`,
      price: 30.0,
      stock: 40,
      image_url: '',
      category_id: 1,
    },
    {
      id: 2,
      name: 'Side Salad',
      description: `For your sidekick!`,
      price: 30.0,
      stock: 30,
      image_url: '',
      category_id: 1,
    },
    {
      id: 3,
      name: 'Chicken Wings',
      description: `Good thing chickens already couldn't fly`,
      price: 30.0,
      stock: 40,
      image_url: '',
      category_id: 1,
    },
    {
      id: 4,
      name: 'Roast Beast',
      description: `Some kind of Dr Seuss reference`,
      price: 30.0,
      stock: 40,
      image_url: '',
      category_id: 2,
    },
    {
      id: 5,
      name: 'Pasta Ala Mood',
      description: `Americas favourite pasta time`,
      price: 30.0,
      stock: 40,
      image_url: '',
      category_id: 2,
    },
    {
      id: 6,
      name: 'Skittle Bräu',
      description: `The beer with skittles in it`,
      price: 30.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 7,
      name: 'Dessert Island',
      description: `We'll give you fun with one bullet`,
      price: 30.0,
      stock: 40,
      image_url: '',
      category_id: 3,
    },
    {
      id: 8,
      name: 'A plum floating in perfume, served in a mans hat',
      price: 30.0,
      description: `Number 8, Number 8, Number 8`,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
  ])
}
