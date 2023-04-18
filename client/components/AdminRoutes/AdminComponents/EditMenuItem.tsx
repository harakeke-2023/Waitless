import { useEffect, useState } from 'react'
import ItemForm from './ItemForm'
import { useParams } from 'react-router-dom'
import { getMenuItemById } from '../../../apis/menuItems'
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

export default function EditMenuItem() {
  const [menuItemForEdit, setMenuItemForEdit] = useState(blankItem)

  const { id } = useParams()

  useEffect(() => {
    getMenuItemById(Number(id))
      .then((menuItem) => {
        setMenuItemForEdit(() => menuItem)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [id])

  return (
    <div>
      <ItemForm
        editItem={menuItemForEdit}
        setMenuItemForEdit={setMenuItemForEdit}
      />
    </div>
  )
}
