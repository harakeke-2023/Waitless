import request from 'supertest'
import server from '../server'
import * as db from '../db/menuItems'

jest.mock('../db/menuItems')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('GET /api/v1/menuitems', () => {
  it('responds with gardens on res body', async () => {
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
