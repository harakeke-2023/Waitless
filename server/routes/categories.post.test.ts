import request from 'supertest'
import server from '../server'
import * as db from '../db/categories'
import { CategoryDb, CategoryMutation } from '../../models/Category'

jest.mock('../db/categories')

beforeEach(() => {
  jest.clearAllMocks()
})

const newCategory = {
  category_name: 'A Cool Wet Sack',
} as CategoryDb

describe('POST /api/v1/categories', () => {
  it('adds new category, and confirms', async () => {
    jest.mocked(db.addCategory).mockImplementation(() => {
      return Promise.resolve([1])
    })

    await request(server)
      .post('/api/v1/categories')
      .send(newCategory)
      .expect(201)

    expect(db.addCategory).toHaveBeenCalled()
  })
})

describe('DELETE /api/v1/categories', () => {
  it('deletes category, and confirms deletion', async () => {
    jest.mocked(db.deleteCategory).mockImplementation(() => {
      return Promise.resolve(1)
    })

    await request(server).delete('/api/v1/categories/1')

    expect(db.deleteCategory).toHaveBeenCalled()
  })
})

describe('POST /api/v1/categories/:id Update menu item', () => {
  it('responds with confirmation of updated category', async () => {
    jest.mocked(db.updateCategory).mockImplementation((updatedCategory) => {
      expect(updatedCategory.id).toBe(1)
      expect(updatedCategory.category_name).toBe('Pear Shaped Items')
      return Promise.resolve(1)
    })

    await request(server)
      .patch('/api/v1/categories/1')
      .send({
        id: 1,
        category_name: 'Pear Shaped Items',
      } as CategoryMutation)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('responds with 500 and correct error object on DB error', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    jest
      .mocked(db.updateCategory)
      .mockImplementation(() =>
        Promise.reject(new Error('mock updateCategory error'))
      )
    const res = await request(server)
      .patch('/api/v1/categories/99999')
      .expect('Content-Type', /json/)
      .send({
        id: 1,
        category_name: 'Autumnn Rolls',
      } as CategoryMutation)
      .expect('Content-Type', /json/)
      .expect(500)

    expect(consoleSpy).toHaveBeenCalledWith('mock updateCategory error')
    expect(res.body.error.title).toBe('Unable to update category with id: 1')

    consoleSpy.mockRestore()
  })
})
