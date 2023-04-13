import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {useParams, NavLink, Route, Routes} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

 

function HomeMenu() {
const {id } = useParams()

const [open, setOpen] = useState(false)

const toggleMenu = () => {
  setOpen((prev)=> !prev)
}
  return (
    <>
     <nav className={open ? 'block'  : 'hidden' + 'w-full lg:flex justify-between items-center lg:items-center lg:w-auto'}>
        <div className='lg:flex tex-center md:text-align'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/table/:tableNo/menu' element={<Menultems/>}/>
            <Route path='/table/:tableNo/aboutus' element={<Contact/>}/>

            
          </Routes>

        </div>
     </nav>
    </>
  )
}

export default HomeMenu()