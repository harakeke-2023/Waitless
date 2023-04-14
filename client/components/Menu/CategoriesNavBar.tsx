import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoriesNavBar() {
  return (
  <>
   <nav>
        <div className="lg:flex text-center md:text-align  bg-burgundy-500">
          <Link
            to="/"
            className=" text-beige-500 "
          >
            App
          </Link>

          <Link
            to="/table/:tableNo/menu"
            className="text-black"
          >
            Noodle
          </Link>

          <Link
            to="/table/:tableNo/contact"
            className="text-black "
          >
            Drink
          </Link>
        </div>
      </nav>
    
    </>
  )
}
