import { useFormik } from 'formik'
import moment from 'moment'
import { MenuItemMutation } from '../../../../models/MenuItem'
import e from 'express'
import { useState } from 'react'

interface Props {
  item?: MenuItemMutation
}

export default function ItemForm(props: Props) {
  const [editItem, setEditItem] = useState({
    id: 0,
    name: '',
    description: '',
    price: '',
    stock: '',
    image_url: '',
    category_id: 0,
  })

  const handleChange = (event) => {
    setEditItem({ ...editItem, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(editItem)
    setEditItem({
      name: '',
      description: '',
      price: '',
      stock: '',
    })
  }

  return (
    <>
      <div>ItemForm</div>
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
              // onChange={handleChange}
              value={editItem.name}
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
              // onChange={handleChange}
              value={editItem.description}
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
              // onChange={handleChange}
              value={editItem.price}
            />
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
              // onChange={handleChange}
              value={editItem.stock}
            />
          </div>

          <div className="button-group mt-8">
            {/* {props === 'Update Item' ? ( */}
            <button
              className="submit form-box bg-orange rounded px-4 py-1 box-border text-white "
              // onClick={handleDelete}
            >
              Delete
            </button>
            {/* ) : null} */}

            <button
              className="submit form-box ml-16  bg-orange rounded px-10 py-1 box-border text-white "
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
