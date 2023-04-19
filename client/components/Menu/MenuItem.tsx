import {
  MenuItemMutation,
  MenuItemMutationWithQuantity,
} from '../../../models/MenuItem'
import { useEffect, useState } from 'react'

interface Props {
  item: MenuItemMutation
  fetchNumberOfCartItems: () => void
}
export function MenuItem(props: Props) {
  const { item, fetchNumberOfCartItems } = props
  const [addedToCart, setAddedToCart] = useState(false)
  const [quantityToAdd, setQuantityToAdd] = useState(1)
  //count is only here to make the total update. I was very tired.

  const changeQuantity = (
    plusOrMinus: number,
    itemId: number,
    removeFromCart = false
  ) => {
    removeFromCart && setAddedToCart(false)

    setQuantityToAdd((quantity) => quantity + plusOrMinus)
    const cartItems = (JSON.parse(localStorage.getItem('cart') as string) ||
      []) as MenuItemMutationWithQuantity[]

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
    removeFromCart && setQuantityToAdd(1)
    fetchNumberOfCartItems()
  }

  const addToCart = (
    evt: React.MouseEvent<HTMLButtonElement>,
    newItem: MenuItemMutation
  ) => {
    setAddedToCart(() => true)

    const currentCartJson = localStorage.getItem('cart')
    const currentCartArr = JSON.parse(currentCartJson as string) || []
    let newCartArray = []

    if (
      currentCartArr.some(
        (item: MenuItemMutationWithQuantity) => item.id === newItem.id
      )
    ) {
      newCartArray = currentCartArr.map(
        (item: MenuItemMutationWithQuantity) => {
          if (item.id === newItem.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        }
      )
    } else newCartArray = [...currentCartArr, { ...newItem, quantity: 1 }]

    const newCartJson = JSON.stringify(newCartArray)
    localStorage.setItem('cart', newCartJson)

    //This is just to set up the number of items in the cart
    let numberInCart =
      JSON.parse(localStorage.getItem('numberInCart') as string) || 0
    numberInCart++
    numberInCart = JSON.stringify(numberInCart)
    localStorage.setItem('numberInCart', numberInCart)
    fetchNumberOfCartItems()
  }
  if (item.category_id !== 4) {
    return (
      <>
        <div
          key={item.id}
          className="items-center flex flex-col border-solid border-4 border-red-900 rounded-lg p-2 m-px"
        >
          <img
            className="h-1/2"
            src={`/images/${item.image_url}`}
            alt={item.name}
          />
          <h2 className="h-1/5 text-xs md:text-base lg:text-xl text-center">
            <strong>{item.name}</strong>
          </h2>
          <p className="h-1/5 text-sm md:text-base lg:text-xl text-center">
            NZD${Number(item.price).toFixed(2)}
          </p>
          {!addedToCart && (
            <button
              type="button"
              onClick={(evt) => addToCart(evt, item)}
              className="p-3 sm:h-1/4 border-solid border-2 border-red-900 bg-slate-100 hover:bg-red-900 rounded-md cursor-pointer px-4 py-2 m-2"
            >
              Add to Cart
            </button>
          )}
          {addedToCart && (
            <div className="h-1/4">
              <button
                onClick={() =>
                  quantityToAdd >= 2
                    ? changeQuantity(-1, item.id)
                    : changeQuantity(-1, item.id, true)
                }
                className="w-1/5 sm:w-auto font-extrabold p-3  border-2 border-r-0"
              >
                -
              </button>
              <button className="px-5 sm:px-6 font-extrabold p-3  border-2">
                {quantityToAdd}
              </button>
              <button
                onClick={() => changeQuantity(1, item.id)}
                className="w-1/5 sm:w-auto font-extrabold p-3  border-2 border-l-0 "
              >
                +
              </button>
            </div>
          )}
        </div>
      </>
    )
  } else {
    return (
      <div
        key={item.id}
        className="col-span-2 text-base md:text-xl flex justify-between items-center"
      >
        <p>
          <strong>{item.name}</strong> - NZD ${item.price.toFixed(2)}
        </p>
        <button
          className="border-solid border-2 border-red-900 bg-slate-100 hover:bg-red-900 rounded-md cursor-pointer p-2 "
          onClick={(evt) => addToCart(evt, item)}
        >
          Add
        </button>
      </div>
    )
  }
}
