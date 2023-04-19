import { useNavigate } from 'react-router-dom'
import { MenuItemMutation } from '../../../../models/MenuItem'
import { deleteMenuItem } from '../../../apis/menuItems'
import { QueryObserverResult } from 'react-query'

interface Props {
  item: MenuItemMutation
  refetch: () => Promise<QueryObserverResult<MenuItemMutation[], unknown>>
}

export default function AdminMenuitem(props: Props) {
  const navigate = useNavigate()
  const item = props.item

  function handleEdit() {
    navigate(`/admin/menu/edit/${item.id}`)
  }
  async function handleDelete() {
    await deleteMenuItem(item.id)
    props.refetch()
  }

  return (
    <div className="flex flex-wrap justify-between px-8 py-4 mx-10 w-3/4 items-center">
      <strong className="w-2/6">{item.name}</strong>
      <p className="w-1/12">
        <b>Price:</b> {Number(item.price).toFixed(2)}
      </p>
      <p className="w-1/6">
        <b>Description:</b> {item.description}
      </p>
      <p className="w-1/12">
        <b>Stock:</b> {item.stock}
      </p>
      <button
        type="button"
        onClick={handleEdit}
        className="border-solid border-2 border-red-900 bg-slate-100 hover:bg-red-900 rounded-md cursor-pointer p-2 m-2 w-1/12"
      >
        {' '}
        Edit
      </button>
      <button
        type="button"
        onClick={handleDelete}
        className="border-solid border-2 border-red-900 bg-slate-100 hover:bg-red-900 rounded-md cursor-pointer p-2 m-2 w-1/12"
      >
        {' '}
        Delete
      </button>
    </div>
  )
}
