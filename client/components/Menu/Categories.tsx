import React, { useState } from 'react'
import {
  MenuItemMutation,
  MenuItemMutationWithQuantity,
} from '../../../models/MenuItem'
import { MenuItem } from './MenuItem'

export interface Props {
  category: MenuItemMutation[]
  fetchNumberOfCartItems: () => void
}

export default function Categories(props: Props) {
  const [addedToCart, setAddedToCart] = useState(false)
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
    props.fetchNumberOfCartItems()
  }

  return (
    <>
      <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 xl:px-16 my-6">
        {props.category.map((item: MenuItemMutation) => {
          return (
            <MenuItem
              item={item}
              key={item.id}
              fetchNumberOfCartItems={props.fetchNumberOfCartItems}
            />
          )
        })}
      </section>
    </>
  )
}
