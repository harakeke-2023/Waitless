import { Link } from 'react-router-dom'

function AdminHomeMenu() {
  return (
    <>
      <nav className="block max-w-screen-full flex-wrap items-center justify-between mx-auto p-4 bg-burgundy-500">
        <ul className="lg:flex text-center md:text-align ">
          <li>
            <Link
              to={`/admin`}
              className="rounded text-beige-500  hover:bg-black-600 text-xl after:font-medium uppercase leading-normal hover:text-green block my-6 py-2 px-6 transition duration-150 ease-in-out hover:border-neutral-100"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={`/admin/menu`}
              className="rounded text-beige-500  hover:bg-black-600 text-xl font-medium uppercase leading-normal hover:text-green block my-6 py-2 px-6 transition duration-150 ease-in-out hover:border-neutral-100"
            >
              Menu
            </Link>
          </li>

          <li>
            <Link
              to={`/admin/menu/add`}
              className="rounded text-beige-500  hover:bg-black-600 text-xl font-medium uppercase leading-normal hover:text-green block my-6 py-2 px-6 transition duration-150 ease-in-out hover:border-neutral-100"
            >
              Add Menu Item
            </Link>
          </li>
          <li>
            <Link
              to={`/admin/order`}
              className="rounded text-beige-500  hover:bg-black-600 text-xl font-medium uppercase leading-normal hover:text-green block my-6 py-2 px-6 transition duration-150 ease-in-out hover:border-neutral-100"
            >
              Order List
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default AdminHomeMenu
