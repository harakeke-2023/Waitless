import React, { useState } from 'react'

import Payment from './Payment'

//Mock data for cart items
const cartitems = [
  {
    categoryid: 1,
    id: 2,
    name: 'Vegetarian Mini Samosas ( 10 pcs)',
    price: 12,
  },
  { categoryid: 2, id: 16, name: 'Tofu Fried Rice', price: 18.8 },
  { categoryid: 3, id: 18, name: 'Pad Thai Duck', price: 21.8 },
  { categoryid: 4, id: 63, name: 'Pinor Gris', price: 9 },
]

const Cart = () => {
  const [isPaymentSubmitted, setPaymentSubmitted] = useState(false)

  const handlePaymentSubmit = () => {
    //payment process logic

    // set payment submitted status to true
    setPaymentSubmitted(true)
  }
  return (
    <div>
      {isPaymentSubmitted ? (
        <Payment />
      ) : (
        <div>
          <h1>Cart Items</h1>
          <ul>
            {cartitems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <button onClick={handlePaymentSubmit}>Submit Payment</button>
        </div>
      )}
    </div>
  )
}

export default Cart
