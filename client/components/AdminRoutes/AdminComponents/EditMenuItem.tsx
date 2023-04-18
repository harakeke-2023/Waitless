import { useEffect, useState } from 'react'
import ItemForm from './ItemForm'
import { useParams } from 'react-router-dom'
import { getMenuItemById } from '../../../apis/menuItems'
import { MenuItemMutation } from '../../../../models/MenuItem'

export default function EditMenuItem() {
  const [menuItemForEdit, setMenuItemForEdit] = useState({
    id: 0,
    name: '',
    description: '',
    price: 0,
    stock: 0,
    image_url: '',
    category_id: 0,
  } as MenuItemMutation)
  const { id } = useParams()

  useEffect(() => {
    getMenuItemById(Number(id))
      .then((menuItem) => {
        console.log('in editmenuItem: ', menuItem)
        setMenuItemForEdit(() => menuItem)
      })
      .catch((error) => {
        console.error(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <ItemForm
        editItem={menuItemForEdit}
        setMenuItemForEdit={setMenuItemForEdit}
      />
    </div>
  )
}
