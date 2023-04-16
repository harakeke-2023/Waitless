import React, { useEffect, useState } from 'react'
import SuccessPage from './SuccessPage'
import { MenuItemMutationWithQuantity } from '../../models/MenuItem'

interface CartProps {
  handlePaymentSubmit: () => void
}
//const Cart: React.FC<CartProps> is a functional component that takes in CartProps as a prop.
//The handlePaymentSubmit prop is expected to be a function that is called when the user clicks the "Submit Payment Method" button
const Cart: React.FC<CartProps> = ({ handlePaymentSubmit }) => {
  const [isPaymentSubmitted, setPaymentSubmitted] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([]) // Update to use CartItem type

  // const newLocal = [
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
  // Mock data for cart items

  // const currentCartJson = localStorage.getItem('cart')
  // const currentCartArr = JSON.parse(currentCartJson as string) || []
  const handlePaymentButtonClick = () => {
    handlePaymentSubmit()
    setPaymentSubmitted(true)
  }

  // const addToCart = (item: CartItem) => {
  //   // Add item to cart
  //   setCartItems([...cartItems, item])
  // }
  useEffect(() => {
    const currentCartJson = localStorage.getItem('cart')
    const fetchedCartItems = (JSON.parse(currentCartJson as string) ||
      []) as MenuItemMutationWithQuantity[]
    setCartItems(() => fetchedCartItems)
  }, [])

  const removeFromCart = (itemId: number) => {
    // Remove item from cart based on itemId
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId)
    const newCartJson = JSON.stringify(updatedCartItems)
    localStorage.setItem('cart', newCartJson)
    setCartItems(() => updatedCartItems)
  }

  const changeQuantity = (
    plutOrMinus: number,
    itemId: number,
    currentQueantity: number
  ) => {
    console.log('SEAN: ', currentQueantity)
    const newCart = [
      ...cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + plutOrMinus }
        }
        return item
      }),
    ]
    const newCartJson = JSON.stringify(newCart)
    localStorage.setItem('cart', newCartJson)
    setCartItems(() => newCart)
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
              <article className="m-6 ml-0 w-64 my-4 p-6 rounded-md border-2 shadow-xl flex flex-col justify-around">
                <ul>
                  {cartItems.map((item, index) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center mb-2"
                    >
                      <span>
                        {item.name}
                        <h3 className="font-bold p-0 flex items-center justify-center">
                          <button
                            onClick={() =>
                              cartItems[index].quantity >= 2
                                ? changeQuantity(-1, item.id, item.quantity)
                                : removeFromCart(item.id)
                            }
                            className="p-4 border-2 border-r-0"
                          >
                            -
                          </button>
                          <div className="p-4 px-10 font-bold border-2">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() =>
                              changeQuantity(1, item.id, item.quantity)
                            }
                            className="p-4 border-2 border-l-0"
                          >
                            +
                          </button>
                        </h3>
                        {item.price * item.quantity}
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
              </article>
            ) : (
              <div>Nothing in cart</div>
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
