import { useLocation } from 'react-router-dom'
import { MenuItemMutation } from '../../../../models/MenuItem'

interface Props {
  item?: MenuItemMutation
}

export default function ItemForm(props: Props) {
  let editItem = { ...props.item }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    editItem = { ...editItem, [event.target.name]: event.target.value }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // if (location.pathname.includes('/add')){
    //   addMenuItem()
    // }

    console.log(editItem)
    editItem = {
      name: '',
      description: '',
      price: 0,
      stock: 0,
    }
  }

  //get url
  const location = useLocation()

  return (
    <>
      <section className="w-1/2 mx-auto my-14 flex flex-col">
        <div>Edit Menu :</div>
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
              value={editItem && editItem.price}
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
              onChange={handleChange}
              value={editItem && editItem.stock}
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
                  // onClick={handleDelete}
                >
                  Edit
                </button>

                <button
                  className="submit form-box bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  // onClick={handleDelete}
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
