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
          if(item.category_id !== 4){
          return (
            <div key={item.id} className='flex flex-wrap flex-row justify-center'>
                
              <div>
                <img src={`/images/${item.image_url}`} alt={item.name} />
              </div>
              <strong>{item.name}</strong>
              <p>NZD${item.price}</p>
            </div>
          ) }else{return (
            <div key={item.id}>
              <p><strong>{item.name}</strong> - NZD${item.price}</p>
              
            </div>
            )}
        })}
      </section>
    </>
  )
}
