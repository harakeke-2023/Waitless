import React, { useState } from 'react'
import Payment from './Payment'
import SuccessPage from './SuccessPage'

// Mock data for cart items
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

type CartProps = {
  handlePaymentSubmit: () => void // Define handlePaymentSubmit prop type
}

const Cart: React.FC<CartProps> = ({ handlePaymentSubmit }) => {
  // Add handlePaymentSubmit as a prop
  const [isPaymentSubmitted, setPaymentSubmitted] = useState(false)

  const handlePaymentButtonClick = () => {
    // Call the handlePaymentSubmit callback function passed as a prop
    handlePaymentSubmit()
    setPaymentSubmitted(true)
  }

  return (
    <div>
      {isPaymentSubmitted ? (
        // render the SuccessPage component if payment is submitted *Mock*
        <SuccessPage
          name={''}
          checkStatus={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
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
          <button onClick={handlePaymentButtonClick}>Submit Payment</button>{' '}
          {/* Use handlePaymentButtonClick as the onClick handler */}
        </div>
      )}
    </div>
  )
}

export default Cart
