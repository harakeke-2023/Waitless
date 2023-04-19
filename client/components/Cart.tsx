import { useEffect, useState } from 'react'
import SuccessPage from './SuccessPage'
import { MenuItemMutationWithQuantity } from '../../models/MenuItem'
import {
  CustomerDetails,
  CustomerOrderDb,
  OrderDetails,
} from '../../models/CustomerOrders'
import { useNavigate, useParams } from 'react-router-dom'
import { sendCustomerOrder } from '../apis/customerOrders'

const Cart = () => {
  const navigate = useNavigate()
  const { tableNo } = useParams() as { tableNo: string }
  const [isPaymentSubmitted, setPaymentSubmitted] = useState(false)
  const [cartItems, setCartItems] = useState(
    [] as MenuItemMutationWithQuantity[]
  ) // Update to use CartItem type
  const [totalCost, setTotalCost] = useState(0)
  //count is only here to make the total update. I was very tired.
  const [count, addCount] = useState(0)

  const submitOrderToDb = () => {
    setPaymentSubmitted(true)

    const customerDetails: CustomerDetails = JSON.parse(
      localStorage.getItem('customerDetails') as string
    ) || { name: '', email: '' }

    const itemsToOrder = cartItems.map((item) => {
      return {
        menu_item_id: item.id,
        quantity: item.quantity,
        price: item.quantity * item.price,
      }
    }) as OrderDetails[]

    const fullCustomerOrder: CustomerOrderDb = {
      total_cost: Number(totalCost.toFixed(2)),
      customer_name: customerDetails.name,
      customer_email: customerDetails.email,
      table_number: Number(tableNo),
      order_details: itemsToOrder,
    }

    sendCustomerOrder(fullCustomerOrder)
      .then((res) => {
        if (res) {
          navigate(`/table/${tableNo}/order/success`)
        } else {
          navigate(`/table/${tableNo}/order/fail`)
        }
      })
      .catch((error) => console.error(error))
    localStorage.setItem('cart', JSON.stringify([]))
  }

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
    <div className="container max-w-screen-lg mx-auto px-3 ">
      {isPaymentSubmitted ? (
        // render the SuccessPage component if payment is submitted *Mock*
        <SuccessPage />
      ) : (
        <div>
          <div>
            {cartItems.length > 0 ? (
              <article className="my-4 rounded-md shadow-lg">
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={item.id} className="shadow-lg p-4">
                      <span>
                        <h2 className="font-bold flex items-center justify-between">
                          <div className="flex w-full md:w-1/2">
                            {item.name}
                          </div>
                          <div className="ml-2 w-1/5 font-bold flex items-center justify-center md:justify-end">
                            $
                            {(
                              Number(item.quantity) * Number(item.price)
                            ).toFixed(2)}
                          </div>
                          <div className="flex flex-col-reverse sm:flex-row items-center md:ml-2 p-2">
                            <button
                              onClick={() =>
                                cartItems[index].quantity >= 2
                                  ? changeQuantity(-1, item.id)
                                  : removeFromCart(item.id)
                              }
                              className="py-1 border-r-2 sm:border-r-0 p-3 border-2 "
                            >
                              -
                            </button>
                            <div className="px-3 sm:px-3 md:px-7 py-1 font-bold border-2">
                              {item.quantity}
                            </div>
                            <button
                              onClick={() => changeQuantity(1, item.id)}
                              className="py-1 border-l-2 sm:border-l-0 p-3 border-2 "
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className=" ml-2  bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
            Total: ${Number(totalCost).toFixed(2)}
          </h2>

          <button
            onClick={submitOrderToDb}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 mb-8 "
          >
            Submit Order
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
