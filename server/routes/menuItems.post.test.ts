import request from 'supertest'
import server from '../server'
import * as db from '../db/menuItems'
import { MenuItemMutation } from '../../models/MenuItem'

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

describe('POST /api/v1/menuitems', () => {
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

describe('PATCH /api/v1/menuitems', () => {
  it('sets item to inactive, and confirms', async () => {
    jest.mocked(db.setMenuItemInactive).mockImplementation(() => {
      return Promise.resolve(1)
    })

    await request(server).delete('/api/v1/menuitems/1')

    expect(db.setMenuItemInactive).toHaveBeenCalled()
  })
})

describe('PATCH /api/v1/menuitems/:id Update menu item', () => {
  it('responds with confirmation of updated item', async () => {
    jest.mocked(db.updateMenuItem).mockImplementation((updatedMenuItem) => {
      expect(updatedMenuItem.id).toBe(1)
      expect(updatedMenuItem.name).toBe('Autumnn Rolls')
      expect(updatedMenuItem.description).toBe('Well these are out of season')
      return Promise.resolve(1)
    })

    await request(server)
      .patch('/api/v1/menuitems/1')
      .send({
        id: 1,
        name: 'Autumnn Rolls',
        description: 'Well these are out of season',
        price: 30,
        stock: 40,
        image_url: '',
        category_id: 1,
        category_name: 'Starters',
      } as MenuItemMutation)
      .expect('Content-Type', /json/)
      .expect(200)
  })

  it('responds with 500 and correct error object on DB error', async () => {
    const consoleSpy = jest.spyOn(console, 'error')
    jest
      .mocked(db.updateMenuItem)
      .mockImplementation(() =>
        Promise.reject(new Error('mock updateMenuItem error'))
      )
    const res = await request(server)
      .patch('/api/v1/menuitems/99999')
      .expect('Content-Type', /json/)
      .send({
        id: 1,
        name: 'Autumnn Rolls',
        description: 'Well these are out of season',
        price: 30,
        stock: 40,
        image_url: '',
        category_id: 1,
        category_name: 'Starters',
      } as MenuItemMutation)
      .expect('Content-Type', /json/)
      .expect(500)

    expect(consoleSpy).toHaveBeenCalledWith('mock updateMenuItem error')
    expect(res.body.error.title).toBe('Unable to update menu Item with id: 1')

    consoleSpy.mockRestore()
  })
})
