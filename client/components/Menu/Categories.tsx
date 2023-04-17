import React from 'react'
import { MenuItemMutation } from '../../../models/MenuItem'

interface Props {
  category: MenuItemMutation[]
}

export default function Categories(props: Props) {
  const addToCart = () => {
    console.log('add to cart')
  }
  return (
    <>
      <section className="flex flex-wrap mx-4 max-w-full">
        {props.category.map((item) => {
          if (item.category_id !== 4) {
            return (
              <div key={item.id} className="max-w-1/2  flex flex-col border-solid border-4 border-red-900 rounded-lg m-auto p-2">
                <img src={`/images/${item.image_url}`} alt={item.name} />
                <h2 className="text-xs md:text-base lg:text-xl text-center">
                  <strong>{item.name}</strong>
                </h2>
                <p className="text-sm md:text-base lg:text-xl text-center">NZD${item.price}</p>
                <button onClick={addToCart} className="border-solid border-2 border-red-900 bg-slate-100 hover:bg-red-900 rounded-md cursor-pointer px-4 m-2">Add to Cart</button>
              </div>
            )
          } else {
            return (
              <div key={item.id}>
                <p>
                  <strong>{item.name}</strong> - NZD${item.price}
                  <button onClick={addToCart}>Add to Cart</button>

                </p>
              </div>
            )
          }
        })}
      </section>
    </>
  )
}
