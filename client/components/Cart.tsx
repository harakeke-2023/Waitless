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
  const [cartItems, setCartItems] = useState(
    [] as MenuItemMutationWithQuantity[]
  ) // Update to use CartItem type
  const [totalCost, setTotalCost] = useState(0)
  //count is only here to make the total update. I was very tired.
  const [count, addCount] = useState(0)

  const submitOrderToDb = () => {
    handlePaymentSubmit()
    setPaymentSubmitted(true)
    console.log('payment successful')
    console.log('cart Items: ', cartItems)
    console.log('total cost: ', totalCost)
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

    setTotalCost(() =>
      fetchedCartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.quantity * currentValue.price,
        0
      )
    )
  }, [count])

  const removeFromCart = (itemId: number) => {
    addCount((count) => count + 1)
    // Remove item from cart based on itemId
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId)
    const newCartJson = JSON.stringify(updatedCartItems)
    localStorage.setItem('cart', newCartJson)
    setCartItems(() => updatedCartItems)
  }

  const changeQuantity = (plusOrMinus: number, itemId: number) => {
    addCount((count) => count + 1)
    const newCart = [
      ...cartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + plusOrMinus }
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
          handleReturnButton={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      ) : (
        <div>
          <div className="p-4">
            {cartItems.length > 0 ? (
              <article className="my-4 rounded-md shadow-lg">
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={item.id} className="shadow-lg">
                      <span>
                        <h2 className="font-bold flex items-center ">
                          <div className="flex  w-1/2">{item.name}</div>
                          <div className=" ml-2 w-1/5 font-bold flex items-center  mr-20">
                            ${item.quantity * item.price}
                          </div>

                          <button
                            onClick={() =>
                              cartItems[index].quantity >= 2
                                ? changeQuantity(-1, item.id)
                                : removeFromCart(item.id)
                            }
                            className=" p-3 border-2 border-r-0 "
                          >
                            -
                          </button>
                          <div className="p-3 px-10 font-bold border-2">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => changeQuantity(1, item.id)}
                            className="p-3 border-2 border-l-0"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-12 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                          >
                            Remove
                          </button>
                        </h2>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ) : (
              <div>Nothing in cart</div>
            )}
          </div>

          <h2 className="ml-5 font-bold flex items-center ">
            Total: ${totalCost.toFixed(2)}
          </h2>
          <button
            onClick={submitOrderToDb}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit Order
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
