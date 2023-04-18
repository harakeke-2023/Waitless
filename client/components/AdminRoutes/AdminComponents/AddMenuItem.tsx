import { useEffect, useState } from 'react'
import ItemForm from './ItemForm'
import { MenuItemMutation } from '../../../../models/MenuItem'
import { addMenuItem } from '../../../apis/menuItems'

export default function AddMenuItem() {
  const [addItem, setAddItem] = useState({
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    image_url: '',
    category_id: 0,
  } as MenuItemMutation)

  // useEffect(() => {
  //   addMenuItem()
  //     .then((item) => {
  //       setAddItem(() => item)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }, [])

  // const newItem = (addItem) => {
  //   setAddItem([...item, addItem])
  // }

  return (
    <div>
      <ItemForm item={addItem} />
    </div>
  )
}
