import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { MenuItem } from './MenuItem'



export default function MenuItems() {
  const { isLoading, error, data } = useQuery( {
    queryKey:['menu'],
    queryFn: () => fetch('/api/v1/menuitems').then((res) => res.json()),
  });

  
  
  if(isLoading) return <div>Loading...</div>
  
  // if(error) return <div>Error: {error.message}</div>
  console.log(data);
  const items = data.map( )

  return (
   <>
     <div>
        
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <p>{data.price}</p>
        <img src={data.image_url} alt={data.name} />
     </div>
   </>
  );
}
