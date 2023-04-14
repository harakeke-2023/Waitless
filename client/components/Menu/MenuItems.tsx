import { useQuery } from 'react-query'
import React from 'react'
import { MenuItem } from './MenuItem'

import { MenuItemMutation } from '../../../models/MenuItem';
import Categories from './Categories';
import CategoriesNavBar from './CategoriesNavBar';

export default function MenuItems() {
  const { isLoading, error, data } = useQuery( {
    queryKey:['menu'],
    queryFn: () => fetch('/api/v1/menuitems').then((res) => res.json()),
  });
  
  if(isLoading) return <div>Loading...</div>
//Getting Menu Items by categories
//APPETIZERS-1
  const appetizersArr = data.menuItems.filter((item: MenuItemMutation)=> {
 return item.category_id === 1
  })
//FRIED RICE -2
const friedRiceArr = data.menuItems.filter((item: MenuItemMutation)=> {
  return item.category_id === 2
   })
//NOODLES-3
const noodlesArr = data.menuItems.filter((item: MenuItemMutation)=> {
  return item.category_id === 3
   })
//DRINKS-4
const drinksArr = data.menuItems.filter((item: MenuItemMutation)=> {
  return item.category_id === 4
   })
  

  return (
   <>
     <CategoriesNavBar/>
      <div className=' p-8 flex flex-wrap'>
        <h2>Appetizers</h2>
        <Categories category={appetizersArr}/>
      </div>
      <div>
        <h2>Fried Rice</h2>
        <Categories category={friedRiceArr}/>
      </div>
      <div>
        <h2>Noodles</h2>
        <Categories category={noodlesArr}/>
      </div>
      <div>
        <h2>Drinks</h2>
        <Categories category={drinksArr}/>
      </div>
    
   </>
  );
}
