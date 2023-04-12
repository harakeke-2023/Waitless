import express from 'express'
import * as db from '../db/categories'
import { categorySchema } from '../../models/Category'

const router = express.Router()

//GET /api/v1/categories
router.get('/', async (req, res) => {
  try {
    const categories = await db.getAllCategories()
    res.json({ categories })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to retrieve category items',
        },
      })
    }
  }
})

//POST /api/v1/categories
router.post('/', async (req, res) => {
  try {
    await db.addCategory(categorySchema.parse(req.body))

    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to add category Item',
        },
      })
    }
  }
})




// //PATCH /api/v1/menuitems/:id
// router.patch('/:id', async (req, res) => {
//   try {
//     const event = await db.updateMenuItem(
//       menuItemMutationSchema.parse(req.body)
//     )
//     res.status(200).json(event)
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error(error.message)
//       res.status(500).json({
//         error: {
//           title: 'Unable to update menu Item with id: ' + req.body.id,
//         },
//       })
//     }
//   }
// })



export default router
