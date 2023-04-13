import knex from 'knex'
import config from './knexfile'
const testDb = knex(config.test)

import * as db from './menuItems'
import { MenuItem, MenuItemDb } from '../../models/MenuItem'

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

    expect(menuItems).toHaveLength(63)
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
    const menuItems = (await db.getAllMenuItems(testDb)) as MenuItemDb[]

    const newItem = menuItems[menuItems.length - 1]

    expect(newItem.name).toBe('Nuts and Gum')
    expect(newItem.description).toBe(`Together At Last!`)
    expect(newItem.stock).toBe(40)
    expect(newItem.category_id).toBe(2)
  })
})

describe('getMenuItemById', () => {
  it('gets a specific menu item by id', async () => {
    const id = 1
    const menuItem = await db.getMenuItemById(id, testDb)

    expect(menuItem.name).toBe('Vegetarian Mini Spring Rolls ( 10 pcs )')
    expect(menuItem.price).toBe(12)
  })
})

describe('updateMenutItem', () => {
  it('updates item with specific id', async () => {
    const updatedMenuItem = {
      id: 1,
      name: 'Autumnn Rolls',
      description: 'Well these are out of season',
      price: 3,
      stock: 40,
      image_url: '',
      category_id: 1,
    }

    await db.updateMenuItem(updatedMenuItem, testDb)

    const fetchedMenuItem = await db.getMenuItemById(1, testDb)

    expect(fetchedMenuItem.name).toBe('Autumnn Rolls')
    expect(fetchedMenuItem.description).toBe('Well these are out of season')
    expect(fetchedMenuItem.price).toBe(3)
  })
})

describe('deleteMenuItem', () => {
  it('deletes a specific menu item', async () => {
    const id = 1
    await db.deleteMenuItem(id, testDb)

    const menuItems = (await db.getAllMenuItems(testDb)) as MenuItem[]

    expect(menuItems[0].name).toBe('Vegetarian Mini Samosas ( 10 pcs )')
    expect(menuItems[0].id).toBe(2)
  })
})
