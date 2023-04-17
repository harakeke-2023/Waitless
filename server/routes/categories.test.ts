import request from 'supertest'
import server from '../server'
import * as db from '../db/categories'

jest.mock('../db/categories')

beforeEach(() => {
  jest.clearAllMocks()
})

const mockCategory = {
  id: 1,
  category_name: 'Bites',
}

describe('GET /api/v1/categories', () => {
  it('responds with all categories', async () => {
    jest.mocked(db.getAllCategories).mockImplementation(() =>
      Promise.resolve([
        {
          id: 1,
          category_name: 'Asparagoose',
        },
        {
          id: 2,
          category_name: 'Luke Warm Milk',
        },
      ])
    )

    const res = await request(server)
      .get('/api/v1/categories')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body.categories).toHaveLength(2)
    expect(res.body.categories[1].category_name).toBe('Luke Warm Milk')
  })

  it('responds with 500 and correct error object on DB error', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    jest
      .mocked(db.getAllCategories)
      .mockImplementation(() =>
        Promise.reject(new Error('mock getAllCategories error'))
      )
    const res = await request(server)
      .get('/api/v1/categories')
      .expect('Content-Type', /json/)
      .expect(500)

    expect(consoleSpy).toHaveBeenCalledWith('mock getAllCategories error')
    expect(res.body.error.title).toBe('Unable to retrieve category items')

    consoleSpy.mockRestore()
  })
})

describe('GET /api/v1/categories/:id', () => {
  it('responds with correct category by id', async () => {
    jest.mocked(db.getCategoryById).mockImplementation((id) => {
      expect(id).toBe(1)
      return Promise.resolve(mockCategory)
    })

    const res = await request(server)
      .get('/api/v1/categories/1')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body.id).toBe(1)
    expect(res.body.category_name).toBe('Bites')
  })

  it('responds with 500 and correct error object on DB error', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    jest
      .mocked(db.getCategoryById)
      .mockImplementation(() =>
        Promise.reject(new Error('mock getCategoryById error'))
      )
    const res = await request(server)
      .get('/api/v1/categories/99999')
      .expect('Content-Type', /json/)
      .expect(500)

    expect(consoleSpy).toHaveBeenCalledWith('mock getCategoryById error')
    expect(res.body.error.title).toBe('Unable to retrieve menu item, id: 99999')

    consoleSpy.mockRestore()
  })
})
