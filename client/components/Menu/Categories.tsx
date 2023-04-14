import React from 'react'
import { MenuItemMutation } from '../../../models/MenuItem'

interface Props{
  category: MenuItemMutation[]
}

export default function Categories(props: Props) {
return(
  <>
  <div>
  {props.category.map((item)=>{
    return(
    <div key={item.id}>
    <div><img src={`/images/${item.image_url}`} alt={item.name}/></div>
    <strong>{item.name}</strong>
    <p>NZD${item.price}</p>
    </div>
    )
  })}
  </div>
  </>
)
}
