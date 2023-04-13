import knex from 'knex'
import config from './knexfile'
const testDb = knex(config.test)

import * as db from './categories'
import { Category, CategoryDb } from '../../models/Category'

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

describe('getAllCategories', () => {
  it('returns the correct number of menu items', async () => {
    const categories = await db.getAllCategories(testDb)

    expect(categories).toHaveLength(4)
  })
})

describe('addCategory, deleteCategory', () => {
  it('adds a category correctly then deletes it', async () => {
    const newCategory = {
      category_name: 'Potent Potables',
    } as CategoryDb
    await db.addCategory(newCategory, testDb)
    const categories = (await db.getAllCategories(testDb)) as Category[]

    const lastCategory = categories[categories.length - 1]

    expect(lastCategory.category_name).toBe('Potent Potables')
    expect(lastCategory.id).toBe(categories.length)

    const id = categories.length
    await db.deleteCategory(id, testDb)

    const newLastCategory = (await db.getAllCategories(testDb)) as Category[]

    expect(newLastCategory[newLastCategory.length - 1].category_name).not.toBe(
      'Potent Potables'
    )
    expect(newLastCategory[newLastCategory.length - 1].id).not.toBe(
      categories.length
    )
  })
})

describe('getCategoryById', () => {
  it('gets a specific category by id', async () => {
    const id = 1
    const category = (await db.getCategoryById(id, testDb)) as Category

    expect(category.category_name).toBe('Appetizers')
    expect(category.id).toBe(1)
  })
})

describe('updateCategory', () => {
  it('updates category with specific id', async () => {
    const updatedCategory = {
      id: 1,
      category_name: 'Cardboard Cut Outs of Food',
    } as Category

    await db.updateCategory(updatedCategory, testDb)

    const fetchedCategory = (await db.getCategoryById(1, testDb)) as Category

    expect(fetchedCategory.category_name).toBe('Cardboard Cut Outs of Food')
    expect(fetchedCategory.id).toBe(1)
  })
})
