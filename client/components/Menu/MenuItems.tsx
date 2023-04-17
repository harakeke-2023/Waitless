import { useQuery } from 'react-query'

import {
  MenuItemMutation,
  MenuItemMutationWithQuantity,
} from '../../../models/MenuItem'
import Categories from './Categories'
import CategoriesNavBar from './CategoriesNavBar'
import { useState } from 'react'
import ScrollToTop from './Scroll/ScrollToTop'

export default function MenuItems() {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0)

  function fetchNumberOfCartItems() {
    const cartItems = (JSON.parse(localStorage.getItem('cart') as string) ||
      []) as MenuItemMutationWithQuantity[]

    setNumberOfCartItems(() =>
      cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0
      )
    )
  }

  const { isLoading, data } = useQuery({
    queryKey: ['menu'],
    queryFn: () => fetch('/api/v1/menuitems').then((res) => res.json()),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  //This line protects against database table not existing errors.
  if (data.error) {
    console.log(data)
    return <div>Error! {data.error.title} </div>
  }

  //Getting Menu Items by categories
  //APPETIZERS-1
  const appetizersArr = (data || []).menuItems.filter(
    (item: MenuItemMutation) => {
      return item.category_id === 1
    }
  )
  //FRIED RICE -2
  const friedRiceArr = (data || []).menuItems.filter(
    (item: MenuItemMutation) => {
      return item.category_id === 2
    }
  )
  //NOODLES-3
  const noodlesArr = (data || []).menuItems.filter((item: MenuItemMutation) => {
    return item.category_id === 3
  })
  //DRINKS-4
  const drinksArr = (data || []).menuItems.filter((item: MenuItemMutation) => {
    return item.category_id === 4
  })

  return (
    <>
      <CategoriesNavBar
        numberOfCartItems={numberOfCartItems}
        fetchNumberOfCartItems={fetchNumberOfCartItems}
      />
      <div>
        <a id="appetizers" href="#appetizers">
          <h2 className="m-8 text-2xl font-bold">Appetizers</h2>
        </a>
        <Categories
          category={appetizersArr}
          fetchNumberOfCartItems={fetchNumberOfCartItems}
        />
      </div>

      <div>
        <a id="fried rice" href="#fried rice">
          <h2 className="m-8 text-2xl font-bold">Fried Rice</h2>
        </a>
        <Categories
          category={friedRiceArr}
          fetchNumberOfCartItems={fetchNumberOfCartItems}
        />
      </div>
      <div>
        <a id="noodles" href="#noodles">
          <h2 className="m-8 text-2xl font-bold">Noodles</h2>
        </a>
        <Categories
          category={noodlesArr}
          fetchNumberOfCartItems={fetchNumberOfCartItems}
        />
      </div>
      <div>
        <a id="drinks" href="#drinks">
          <h2 className="m-8 text-2xl font-bold">Drinks</h2>
        </a>
        <Categories
          category={drinksArr}
          fetchNumberOfCartItems={fetchNumberOfCartItems}
        />
      </div>
      <ScrollToTop />
    </>
  )
}
