import express from 'express'
import * as db from '../db/menuItems'
import { menuItemSchema, menuItemMutationSchema } from '../../models/MenuItem'

const router = express.Router()

//GET /api/v1/menuitems
router.get('/', async (req, res) => {
  try {
    const menuItems = await db.getAllMenuItems()
    res.json({ menuItems })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve menu items',
        },
      })
    }
  }
})

//GET /api/v1/menuitems/:id
router.get('/:id', async (req, res) => {
  try {
    const fetchedMenuItem = await db.getMenuItemById(Number(req.params.id))
    res.json(fetchedMenuItem)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve menu item, id: ' + req.params.id,
        },
      })
    }
  }
})

//POST /api/v1/menuitems
router.post('/', async (req, res) => {
  try {
    const { name, description, price, stock, image_url, category_id } = req.body
    await db.addMenuItem(
      menuItemSchema.parse({
        name,
        description,
        price: Number(price),
        stock: Number(stock),
        image_url,
        category_id: Number(category_id),
      })
    )

    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to add menu Item',
        },
      })
    }
  }
})

//PATCH /api/v1/menuitems/:id
router.patch('/:id', async (req, res) => {
  try {
    const event = await db.updateMenuItem(
      menuItemMutationSchema.parse(req.body)
    )
    res.status(200).json(event)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to update menu Item with id: ' + req.body.id,
        },
      })
    }
  }
})

//DELETE /api/v1/menuitems/:id
router.delete('/:id', async (req, res) => {
  try {
    console.log('In Routes: ', req.params.id)
    const response = await db.deleteMenuItem(Number(req.params.id))
    res.status(200).json(response)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to delete menu item, id: ' + req.params.id,
        },
      })
    }
  }
})

export default router
