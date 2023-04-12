import knex from 'knex'
import config from './knexfile'
const testDb = knex(config.test)

import * as db from './menuItems'
import { MenuItem, MenuItemDB } from '../../models/MenuItem'

// Prevent Jest from timing out (5s often isn't enough)
jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getAllMenuItems', () => {
  it('returns the correct number of menu items', async () => {
    const menuItems = await db.getAllMenuItems(testDb)

    expect(menuItems).toHaveLength(8)
  })
})

describe('addMenuItem', () => {
  it('adds a menu item correctly', async () => {
    const newMenuItem = {
      name: 'Nuts and Gum',
      description: `Together At Last!`,
      price: 45.0,
      stock: 40,
      image_url: '',
      category_id: 2,
    } as MenuItem

    await db.addMenuItem(newMenuItem, testDb)
    const menuItems = (await db.getAllMenuItems(testDb)) as MenuItemDB[]

    const newItem = menuItems[menuItems.length - 1]

    expect(newItem.name).toBe('Nuts and Gum')
    expect(newItem.description).toBe(`Together At Last!`)
    expect(newItem.stock).toBe(40)
    expect(newItem.category_id).toBe(2)
  })
})
