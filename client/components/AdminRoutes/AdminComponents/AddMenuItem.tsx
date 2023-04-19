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
  category_id: 1,
  active: true,
}

export default function AddMenuItem() {
  const [menuItemForEdit, setMenuItemForEdit] = useState(blankItem)

  return (
    <div>
      <ItemForm
        editItem={menuItemForEdit}
        setMenuItemForEdit={setMenuItemForEdit}
      />
    </div>
  )
}
