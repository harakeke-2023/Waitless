import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import MenuItems from '../Menu/MenuItems'
import Contact from '../Contact'

function CustomerRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableNo" element={<Home />} />
        

        <Route path="/table/:tableNo/menu" element={<MenuItems />} />
        <Route path="/table/:tableNo/aboutus" element={<Contact />} />
      </Routes>
    </>
  )
}

export default CustomerRoutes
