import express from 'express'
import * as db from '../db/menuItems'
import { menuItemSchema } from '../../models/MenuItem'

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

//POST /api/v1/menuitems
router.post('/', async (req, res) => {
  try {
    const dbResponse = await db.addMenuItem(menuItemSchema.parse(req.body))

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

export default router
