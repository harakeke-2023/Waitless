import React from 'react'
import { MenuItemMutation } from '../../../models/MenuItem'

interface Props {
  category: MenuItemMutation[]
}

export default function Categories(props: Props) {
  return (
    <>
      <section className='flex flex-wrap'>
        {props.category.map((item) => {
          if(item.category_id !== 4){
          return (
            <div key={item.id} className='flex flex-column' >
              <img src={`/images/${item.image_url}`} alt={item.name} className='flex'/>
              <strong className='flex'>{item.name}</strong>
              <p className='flex'>NZD${item.price}</p>
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
