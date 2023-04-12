import request from 'supertest'
import server from '../server'
import * as db from '../db/menuItems'
import { MenuItemDB } from '../../models/MenuItem'
import { promise } from 'zod'

jest.mock('../db/menuItems')

beforeEach(() => {
  jest.clearAllMocks()
})

const newMenuItem = {
  name: 'Snuck on Space Potato Chips',
  description: `Careful they're ruffled!`,
  price: 30.0,
  stock: 40,
  image_url: '',
  category_id: 1,
}

describe('post /api/v1/menuitems', () => {
  it('adds new menu item, and confirms', async () => {
    jest.mocked(db.addMenuItem).mockImplementation(() => {
      return Promise.resolve([1])
    })

    await request(server)
      .post('/api/v1/menuitems')
      .send(newMenuItem)
      .expect(201)

    expect(db.addMenuItem).toHaveBeenCalled()
  })
})
