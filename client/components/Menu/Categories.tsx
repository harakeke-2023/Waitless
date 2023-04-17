import React from 'react'
import {
  MenuItemMutation,
  MenuItemMutationWithQuantity,
} from '../../../models/MenuItem'

interface Props {
  category: MenuItemMutation[]
  fetchNumberOfCartItems: () => void
}

export default function Categories(props: Props) {
  const addToCart = (
    evt: React.MouseEvent<HTMLButtonElement>,
    newItem: MenuItemMutation
  ) => {
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
    props.fetchNumberOfCartItems()
  }

  return (
    <>
      <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 xl:px-16 mx-5">
        {props.category.map((item) => {
          if (item.category_id !== 4) {
            return (
              <div
                key={item.id}
                className="items-center flex flex-col border-solid border-4 border-red-900 rounded-lg p-2 m-px"
              >
                <img src={`/images/${item.image_url}`} alt={item.name} />
                <h2 className="text-xs md:text-base lg:text-xl text-center">
                  <strong>{item.name}</strong>
                </h2>
                <p className="text-sm md:text-base lg:text-xl text-center">
                  NZD${item.price.toFixed(2)}
                </p>
                <button
                  type="button"
                  onClick={(evt) => addToCart(evt, item)}
                  className="border-solid border-2 border-red-900 bg-slate-100 hover:bg-red-900 rounded-md cursor-pointer px-4 py-2 m-2"
                >
                  Add to Cart
                </button>
              </div>
            )
          } else {
            return (
              <div key={item.id} className="col-span-2 text-base md:text-xl flex justify-between mx-11 ">
                <p>
                  <strong>{item.name}</strong> - NZD${item.price}
                </p>
                  <button onClick={(evt) => addToCart(evt, item)} className="border-solid border-2 border-red-900 bg-slate-100 hover:bg-red-900 rounded-md cursor-pointer p-2">
                    Add
                  </button>
              </div>
            )
          }
        })}
      </section>
    </>
  )
}
