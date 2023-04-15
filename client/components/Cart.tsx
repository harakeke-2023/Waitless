import React, { useState } from 'react'
import { CartItem } from './types' // Assuming you have defined the types
import SuccessPage from './SuccessPage'

interface CartProps {
  handlePaymentSubmit: () => void
}
//const Cart: React.FC<CartProps> is a functional component that takes in CartProps as a prop.
//The handlePaymentSubmit prop is expected to be a function that is called when the user clicks the "Submit Payment Method" button
const Cart: React.FC<CartProps> = ({ handlePaymentSubmit }) => {
  const [isPaymentSubmitted, setPaymentSubmitted] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([]) // Update to use CartItem type

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

  const handlePaymentButtonClick = () => {
    handlePaymentSubmit()
    setPaymentSubmitted(true)
  }

  const addToCart = (item: CartItem) => {
    // Add item to cart
    setCartItems([...cartItems, item])
  }

  const removeFromCart = (itemId: number) => {
    // Remove item from cart based on itemId
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedCartItems)
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
          <h1>Cart items</h1>
          <div className="border border-gray-200 rounded p-4">
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>
                      {item.name} - ${item.price}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <ul>
                  {cartitems.map((item) => (
                    <li key={item.id}>
                      {item.name} - ${item.price}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <button
            onClick={handlePaymentButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit Payment
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart

// import React, { useState } from 'react'
// import Payment from './Payment'
// import SuccessPage from './SuccessPage'
// import FailedPage from './FailedPage'

// // Mock data for cart items
// const cartitems = [
//   {
//     categoryid: 1,
//     id: 2,
//     name: 'Vegetarian Mini Samosas ( 10 pcs)',
//     price: 12,
//   },
//   { categoryid: 2, id: 16, name: 'Tofu Fried Rice', price: 18.8 },
//   { categoryid: 3, id: 18, name: 'Pad Thai Duck', price: 21.8 },
//   { categoryid: 4, id: 63, name: 'Pinor Gris', price: 9 },
// ]

// type CartProps = {
//   handlePaymentSubmit: () => void // Define handlePaymentSubmit prop type
// }

// const Cart: React.FC<CartProps> = ({ handlePaymentSubmit }) => {
//   // Add handlePaymentSubmit as a prop
//   const [isPaymentSubmitted, setPaymentSubmitted] = useState(false)

//   const handlePaymentButtonClick = () => {
//     // Call the handlePaymentSubmit callback function passed as a prop
//     handlePaymentSubmit()
//     setPaymentSubmitted(true)
//   }

//   return (
//     <div>
//       {isPaymentSubmitted ? (
//         // render the SuccessPage component if payment is submitted *Mock*
//         <SuccessPage
//           name={''}
//           checkStatus={function (): void {
//             throw new Error('Function not implemented.')
//           }}
//         />
//       ) : (
//         <div>
//           <h1>Cart Items</h1>
//           <ul>
//             {cartitems.map((item) => (
//               <li key={item.id}>
//                 {item.name} - ${item.price}
//               </li>
//             ))}
//           </ul>
//           <button onClick={handlePaymentButtonClick}>Submit Payment</button>{' '}
//           {/* Use handlePaymentButtonClick as the onClick handler */}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Cart
