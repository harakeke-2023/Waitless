import express from 'express'
import * as db from '../db/customer_orders'

const router = express.Router()

//POST /api/v1/customerorders
router.post('/', async (req, res) => {
  try {
    console.log('in Routes: ', req.body)
    await db.addCustomerOrder(req.body)

    res.sendStatus(201)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Unable to add customer order',
        },
      })
    }
  }
})

export default router
