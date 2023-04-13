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
            ? 'block border-2 border-solid border-red-500'
            : 'hidden' +
              ' w-full lg:flex justify-between items-center lg:items-center lg:w-auto'
        }
      >
        <div className="lg:flex text-center md:text-align ">
          <Link
            to="/"
            className="text-red-500  hover:text-green block my-6 py-2 px-6"
          >
            Home
          </Link>

          <Link
            to="/table/:tableNo/menu"
            className="text-black hover:text-green block my-6 py-2 px-6"
          >
            Menu
          </Link>

          <Link
            to="/table/:tableNo/contact"
            className="text-black hover:text-green block my-6 py-2 px-6"
          >
            Contact
          </Link>
        </div>
      </nav>
      <div
        className="lg:hidden z-90 absolute top-4 right-6 text-black text-xl"
        onClick={toggleMenu}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </div>
    </>
  )
}

export default HomeMenu
