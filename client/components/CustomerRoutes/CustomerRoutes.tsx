import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import MenuItems from '../Menu/MenuItems'
import Contact from '../Contact'
import Cart from '../Cart'
import SuccessPage from '../SuccessPage'
import FailedPage from '../FailedPage'

function CustomerRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableNo" element={<Home />} />

        <Route path="/table/:tableNo/menu" element={<MenuItems />} />
        <Route path="/table/:tableNo/contact" element={<Contact />} />
        <Route path="/table/:tableNo/cart" element={<Cart />} />
        <Route path="/table/:tableNo/order/success" element={<SuccessPage />} />
        <Route path="/table/:tableNo/order/fail" element={<FailedPage />} />
      </Routes>
    </>
  )
}

export default CustomerRoutes
