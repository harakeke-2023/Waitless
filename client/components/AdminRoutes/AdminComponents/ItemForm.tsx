import { useEffect, useState } from 'react'
import { MenuItemMutation } from '../../../../models/MenuItem'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  addMenuItem,
  deleteMenuItem,
  editMenuItem,
} from '../../../apis/menuItems'
import { CategoryMutation } from '../../../../models/Category'
import { getAllCategories } from '../../../apis/categories'

interface Props {
  editItem: MenuItemMutation
  setMenuItemForEdit: React.Dispatch<
    React.SetStateAction<{
      id: number
      name: string
      description: string
      price: number
      stock: number
      image_url: string
      category_id: number
    }>
  >
}

export default function ItemForm(props: Props) {
  const navigate = useNavigate()
  const { editItem, setMenuItemForEdit } = props
  const [currentCategories, setCurrentCategories] = useState(
    [] as CategoryMutation[]
  )

  useEffect(() => {
    getAllCategories()
      .then((categories) => {
        setCurrentCategories(() => categories)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItem = { ...editItem, [event.target.name]: event.target.value }
    setMenuItemForEdit(() => newItem)
  }

  const handleDelete = async () => {
    try {
      await deleteMenuItem(editItem.id)
      navigate('/admin/menu')
    } catch (error) {
      console.error('Error deleting: ', error)
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (location.pathname.includes('/add')) {
      try {
        await addMenuItem(editItem)
        navigate('/admin/menu')
      } catch (error) {
        console.error('Error adding item: ', error)
      }
    } else if (location.pathname.includes('/edit')) {
      try {
        await editMenuItem(editItem)
        navigate('/admin/menu')
      } catch (error) {
        console.error('Error editting item: ', error)
      }
    }
  }

  //get url
  const location = useLocation()

  return (
    <>
      <section className="w-1/2 mx-auto my-14 flex flex-col">
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="field flex flex-col">
            <label htmlFor="name" className="label mt-2">
              Food Title
            </label>

            <input
              className="form-box border-solid border border-lightGreen p-2 rounded focus:outline-lightGreen focus:outline-2"
              id="name"
              name="name"
              type="text"
              placeholder="Food Title"
              onChange={handleChange}
              value={editItem && editItem.name}
            />
          </div>

          <div className="field flex flex-col">
            <label htmlFor="description" className="label mt-2">
              Description
            </label>

            <input
              className="form-box border-solid border border-lightGreen p-2 rounded focus:outline-lightGreen focus:outline-2"
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleChange}
              value={editItem && editItem.description}
            />
          </div>
          <div className="field flex flex-col">
            <label htmlFor="price" className="label mt-2">
              Price
            </label>

            <input
              className="form-box border-solid border border-lightGreen p-2 rounded focus:outline-lightGreen focus:outline-2"
              id="price"
              name="price"
              type="text"
              placeholder="Price"
              onChange={handleChange}
              value={editItem && Number(editItem.price)}
            />
          </div>
          <div className="field flex flex-col">
            <label htmlFor="category" className="label mt-2">
              Category
            </label>

            <select
              name="category_id"
              id="categories"
              value={editItem && editItem.category_id}
              onChange={handleChange}
            >
              {currentCategories &&
                currentCategories.map((category) => {
                  return (
                    <option key={category.id} value={category.id}>
                      {category.category_name}
                    </option>
                  )
                })}
            </select>
          </div>
          <div className="field flex flex-col">
            <label htmlFor="stock" className="label mt-2">
              Stock
            </label>

            <input
              className="form-box border-solid border border-lightGreen p-2 rounded focus:outline-lightGreen focus:outline-2"
              id="stock"
              name="stock"
              type="text"
              placeholder="Stock"
              onChange={handleChange}
              value={editItem && Number(editItem.stock)}
            />
          </div>

          <div className=" px-4 py-4">
            {location.pathname.includes('/add') && (
              <button
                className="submit form-box bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                type="submit"
              >
                Submit
              </button>
            )}

            {location.pathname.includes('/edit') && (
              <div className="grid grid-cols-2 space-2 gap-2 px-4 py-4">
                <button
                  className="submit form-box bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  type="submit"
                >
                  Edit
                </button>

                <button
                  className="submit form-box bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </form>
      </section>
    </>
  )
}
