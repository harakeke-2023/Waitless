import React from 'react'
import { MenuItemMutation } from '../../../models/MenuItem'

interface Props {
  category: MenuItemMutation[]
}

export default function Categories(props: Props) {
  return (
    <>
      <section>
        {props.category.map((item) => {
          if (item.category_id !== 4) {
            return (
              <div key={item.id}>
                <img src={`/images/${item.image_url}`} alt={item.name} />
                <h2>
                  <strong>{item.name}</strong>
                </h2>
                <p>NZD${item.price}</p>
              </div>
            )
          } else {
            return (
              <div key={item.id}>
                <p>
                  <strong>{item.name}</strong> - NZD${item.price}
                </p>
              </div>
            )
          }
        })}
      </section>
    </>
  )
}
