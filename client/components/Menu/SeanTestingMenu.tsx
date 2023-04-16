import { useQuery } from 'react-query'
import React from 'react'
import { MenuItem } from './MenuItem'

import {
  MenuItemMutation,
  MenuItemMutationWithQuantity,
} from '../../../models/MenuItem'

import { MenuItemsSortedByCategory } from '../../../server/db/categories'

export default function SeanTestingMenu() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['menu'],
    queryFn: () =>
      fetch('/api/v1/categories/menuitems').then((res) => res.json()),
  })

  if (isLoading) return <div>Loading...</div>

  const menuItemsByCategory = data as MenuItemsSortedByCategory

  function addToCart(
    evt: React.MouseEvent<HTMLButtonElement>,
    newItem: MenuItemMutation
  ) {
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
  }

  return (
    <>
      {data &&
        Object.keys(menuItemsByCategory.categories).map((category, index) => {
          return (
            <>
              <h3 key={category}>{category}</h3>
              <ul key={index}>
                {menuItemsByCategory.categories[category].map(
                  (item: MenuItemMutation) => {
                    return (
                      <li key={item.id}>
                        {item.name}{' '}
                        <button
                          key={item.name}
                          onClick={(evt) => addToCart(evt, item)}
                        >
                          Add to Cart
                        </button>
                      </li>
                    )
                  }
                )}
              </ul>
            </>
          )
        })}
    </>
  )
}
