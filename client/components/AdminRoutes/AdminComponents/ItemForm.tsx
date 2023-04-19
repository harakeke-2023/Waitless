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
      active: boolean
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
      <div className="min-h-min p-6 py-10 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">
              {location.pathname.includes('/add')
                ? 'Add New Item'
                : 'Edit Item'}
            </h2>
            <p className="text-gray-500 mb-6">
              {location.pathname.includes('/add')
                ? 'Add a new item to your menu'
                : 'Edit an existing item'}
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Menu Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <form className="max-w-max" onSubmit={handleSubmit}>
                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="name">Food Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Food Name"
                          onChange={handleChange}
                          value={editItem && editItem.name}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="description">Description</label>
                        <input
                          id="description"
                          name="description"
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Description"
                          onChange={handleChange}
                          value={editItem && editItem.description}
                        />
                      </div>

                      <div className="md:col-span-5">
                        <label htmlFor="price">Price</label>
                        <input
                          id="price"
                          name="price"
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Price"
                          onChange={handleChange}
                          value={editItem && editItem.price}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="category" className="label mt-2">
                          Category
                        </label>

                        <select
                          name="category_id"
                          id="category"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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

                      <div className="md:col-span-5">
                        <label htmlFor="stock">Stock</label>
                        <input
                          id="stock"
                          name="stock"
                          type="text"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Price"
                          onChange={handleChange}
                          value={editItem && Number(editItem.stock)}
                        />
                      </div>

                      <div className="my-4 md:col-span-5 text-right">
                        <div className="inline-flex items-end">
                          {location.pathname.includes('/add') && (
                            <button
                              className="submit form-box bg-gray-500 hover:bg-beige-600 text-white font-bold py-2 px-4 rounded "
                              type="submit"
                            >
                              Submit
                            </button>
                          )}

                          {location.pathname.includes('/edit') && (
                            <div className="grid grid-cols-2 space-2 gap-2 px-4 py-4">
                              <button
                                className="submit form-box bg-gray-500 hover:bg-beige-600 text-white font-bold py-2 px-4 rounded "
                                type="submit"
                              >
                                Edit
                              </button>

                              <button
                                className="submit form-box bg-gray-500 hover:bg-beige-600 text-white font-bold py-2 px-4 rounded "
                                onClick={handleDelete}
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
