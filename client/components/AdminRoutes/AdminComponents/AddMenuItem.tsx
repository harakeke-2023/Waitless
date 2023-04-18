<<<<<<< HEAD
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
=======
import { useState } from 'react'
import ItemForm from './ItemForm'
import { MenuItemMutation } from '../../../../models/MenuItem'

const blankItem: MenuItemMutation = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  stock: 0,
  image_url: '',
  category_id: 0,
}

export default function AddMenuItem() {
  const [menuItemForEdit, setMenuItemForEdit] = useState(blankItem)

  return (
    <div>
      <ItemForm
        editItem={menuItemForEdit}
        setMenuItemForEdit={setMenuItemForEdit}
      />
>>>>>>> 862585e4b7d9ef79bf96267c5a38743a34ac6fb3
    </div>
  )
}
