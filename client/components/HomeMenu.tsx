import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useParams, Route, Routes } from 'react-router-dom'

// React-Icons Import
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

function HomeMenu() {
  const { id } = useParams()

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <nav
        className={
          open
            ? 'block max-w-screen-full flex-wrap items-center justify-between mx-auto p-4 border-2 border-solid bg-burgundy-500'
            : 'hidden' +
              ' w-full lg:flex justify-between items-center lg:items-center lg:w-auto'
        }
      >
        <div className="lg:flex text-center md:text-align ">
          <Link
            to="/"
            className="text-beige-500 active:bg-blue-600 hover:bg-white  text-2xl hover:text-green block my-6 py-2 px-6"
          >
            Home
          </Link>

          <Link
            to="/table/:tableNo/menu"
            className="text-beige-500  hover:bg-white  text-2xl hover:text-green block my-6 py-2 px-6"
          >
            Menu
          </Link>

          <Link
            to="/table/:tableNo/contact"
            className="text-beige-500 hover:bg-white text-2xl hover:text-green block my-6 py-2 px-6"
          >
            Contact
          </Link>
        </div>
      </nav>
      <div
        className="lg:hidden z-90 absolute top-4 right-6 dark:bg-white dark:border-gray-700 text-6xl"
        onClick={toggleMenu}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </div>
    </>
  )
}

export default HomeMenu
