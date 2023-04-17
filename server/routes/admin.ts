import express from 'express'
import * as db from '../db/customerOrders'

const router = express.Router()

//Get /api/v1/admin/orders
router.get('/orders', async (req, res) => {
  try {
    const customerOrders = await db.getAllCustomerOrdersWithDetails()
    console.log(customerOrders)

    res.json({ customerOrders })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({
        error: {
          title: 'Order is not success! Please try again',
        },
      })
    }
  }
})

export default router
