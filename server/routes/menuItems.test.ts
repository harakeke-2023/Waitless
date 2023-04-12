import request from 'supertest'
import server from '../server'
import * as db from '../db/menuItems'

jest.mock('../db/menuItems')

beforeEach(() => {
  jest.clearAllMocks()
})

const mockItem = {
  id: 1,
  name: 'Five Pounds of Frozen Shrimp',
  description: `This shrimp isn't frozen, and it smells funny`,
  stock: 5,
  image_url: '',
  category_id: 1,
}

describe('GET /api/v1/menuitems', () => {
  it('responds with all menu Items', async () => {
    jest.mocked(db.getAllMenuItems).mockImplementation(() =>
      Promise.resolve([
        {
          id: 1,
          name: 'Spring Rolls',
          description: "They ain't summer rolls!",
          stock: 40,
          image_url: '',
          category_id: 1,
          category_name: 'Starters',
        },
        {
          id: 2,
          name: 'Side Salad',
          description: 'For your sidekick!',
          stock: 30,
          image_url: '',
          category_id: 1,
          category_name: 'Starters',
        },
      ])
    )

    const res = await request(server)
      .get('/api/v1/menuitems')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body.menuItems).toHaveLength(2)
    expect(res.body.menuItems[1].name).toBe('Side Salad')
  })

  it('responds with 500 and correct error object on DB error', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    jest
      .mocked(db.getAllMenuItems)
      .mockImplementation(() =>
        Promise.reject(new Error('mock getAllMenuItems error'))
      )
    const res = await request(server)
      .get('/api/v1/menuitems')
      .expect('Content-Type', /json/)
      .expect(500)

    expect(consoleSpy).toHaveBeenCalledWith('mock getAllMenuItems error')
    expect(res.body.error.title).toBe('Unable to retrieve menu items')

    consoleSpy.mockRestore()
  })
})

describe('GET /api/v1/menuitems/:id', () => {
  it('responds with correct menu item by id', async () => {
    jest.mocked(db.getMenuItemById).mockImplementation((id) => {
      expect(id).toBe(1)
      return Promise.resolve(mockItem)
    })

    const res = await request(server)
      .get('/api/v1/menuitems/1')
      .expect('Content-Type', /json/)
      .expect(200)

    expect(res.body.id).toBe(1)
    expect(res.body.name).toBe('Five Pounds of Frozen Shrimp')
    expect(res.body.description).toBe(
      `This shrimp isn't frozen, and it smells funny`
    )
    expect(res.body.stock).toBe(5)
    expect(res.body.category_id).toBe(1)
  })

  it('responds with 500 and correct error object on DB error', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    jest
      .mocked(db.getMenuItemById)
      .mockImplementation(() =>
        Promise.reject(new Error('mock getMenuItemById error'))
      )
    const res = await request(server)
      .get('/api/v1/menuitems/99999')
      .expect('Content-Type', /json/)
      .expect(500)

    expect(consoleSpy).toHaveBeenCalledWith('mock getMenuItemById error')
    expect(res.body.error.title).toBe('Unable to retrieve menu item, id: 99999')

    consoleSpy.mockRestore()
  })
})

// describe('POST /api/v1/menuitems/:id', () => {
//   it('responds with status', async () => {
//     jest.mocked()
//   })
// })
