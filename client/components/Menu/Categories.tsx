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
      <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 xl:px-16">
        {props.category.map((item) => {
          if (item.category_id !== 4) {
            return (
              <div key={item.id} className="items-center flex flex-col border-solid border-4 border-red-900 rounded-lg p-2 m-px">
                <img src={`/images/${item.image_url}`} alt={item.name} />
                <h2 className="text-xs md:text-base lg:text-xl text-center">
                  <strong>{item.name}</strong>
                </h2>
                <p className="text-sm md:text-base lg:text-xl text-center">NZD${item.price.toFixed(2)}</p>
                <button type="button" onClick={addToCart} className="border-solid border-2 border-red-900 bg-slate-100 hover:bg-red-900 rounded-md cursor-pointer px-4 py-2 m-2">Add to Cart</button>
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
