import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useParams, Route, Routes } from 'react-router-dom'

// React-Icons Import
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

function HomeMenu() {
  const { tableNo } = useParams()
  console.log('tablet num', tableNo)

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen((prev) => !prev)
  }
  return (
    <>
      <nav
        className={
          open
            ? 'block max-w-screen-full flex-wrap items-center justify-between mx-auto p-4 bg-burgundy-500'
            : 'hidden' +
              ' w-full lg:flex justify-between items-center lg:items-center lg:w-auto  bg-burgundy-500'
        }
      >
        <ul className="lg:flex text-center md:text-align ">
          <li>
            <Link
              to={`/table/${tableNo}/`}
              className="rounded text-beige-500  hover:bg-black-600 text-xl after:font-medium uppercase leading-normal hover:text-green block my-6 py-2 px-6 transition duration-150 ease-in-out hover:border-neutral-100"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to={`/table/${tableNo}/menu`}
              className="rounded text-beige-500  hover:bg-black-600 text-xl font-medium uppercase leading-normal hover:text-green block my-6 py-2 px-6 transition duration-150 ease-in-out hover:border-neutral-100"
            >
              Menu
            </Link>
          </li>

          <li>
            <Link
              to={`/about`}
              className="rounded text-beige-500  hover:bg-black-600 text-xl font-medium uppercase leading-normal hover:text-green block my-6 py-2 px-6 transition duration-150 ease-in-out hover:border-neutral-100"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="lg:hidden z-90 absolute top-4 right-6 text-white text-6xl"
        onClick={toggleMenu}
      >
        {open ? <IoClose /> : <GiHamburgerMenu />}
      </div>
    </>
  )
}

export default HomeMenu
