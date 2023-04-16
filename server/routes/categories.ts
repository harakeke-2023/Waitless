import express from 'express'
import * as db from '../db/categories'
import { categoryMutationSchema, categorySchema } from '../../models/Category'

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

//GET /api/v1/categories/menuItems
router.get('/menuitems', async (req, res) => {
  try {
    const categories = await db.getMenuItemsSortedByCategory()
    
    res.json(categories)
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

//GET /api/v1/categories/:id
router.get('/:id', async (req, res) => {
  try {
    const fetchedCategory = await db.getCategoryById(Number(req.params.id))
    res.json(fetchedCategory)
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

//PATCH /api/v1/categories/:id
router.patch('/:id', async (req, res) => {
  try {
    const event = await db.updateCategory(
      categoryMutationSchema.parse(req.body)
    )
    res.status(200).json(event)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to update category with id: ' + req.body.id,
        },
      })
    }
  }
})

//DELETE /api/v1/categories/:id
router.delete('/:id', async (req, res) => {
  try {
    const response = await db.deleteCategory(Number(req.params.id))
    res.status(200).json(response)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to delete category, id: ' + req.params.id,
        },
      })
    }
  }
})

export default router
