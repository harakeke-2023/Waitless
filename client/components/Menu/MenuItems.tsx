import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { MenuItem } from './MenuItem'

import { MenuItemMutation } from '../../../models/MenuItem';
import Categories from './Categories';

export default function MenuItems() {
  const { isLoading, error, data } = useQuery( {
    queryKey:['menu'],
    queryFn: () => fetch('/api/v1/menuitems').then((res) => res.json()),
  });
  
  if(isLoading) return <div>Loading...</div>
  
  // if(error) return <div>Error: {error.message}</div>
  console.log(data);

  const appetizersArr = data.menuItems.filter((item: MenuItemMutation)=> {
 return item.category_id === 1
  })
  
  console.log("Appetizers:", appetizersArr);
  
  

  return (
   <>
   

      <div>
        <h2>Appetizers</h2>
        <Categories category={appetizersArr}/>
      </div>
    
   </>
  );
}
