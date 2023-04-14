import React from 'react'
import { MenuItemMutation } from '../../../models/MenuItem'

interface Props{
  category: MenuItemMutation[]
}

export default function Categories(props: Props) {
return(
  <>
  <ul>
  {props.category.map((item)=>{
    return<li key={item.id}>{item.name}</li>
  })}
  </ul>
  </>
)
}
