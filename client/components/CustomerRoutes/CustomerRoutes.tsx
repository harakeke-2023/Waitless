import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import MenuItems from '../Menu/MenuItems'
import Contact from '../Contact'
import Cart from '../Cart'
import SuccessPage from '../SuccessPage'
import FailedPage from '../FailedPage'
import HomeMenu from '../HomeMenu'
import About from '../About'

function CustomerRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:tableNo" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/table/:tableNo/menu"
          element={
            <>
              <div>
                <HomeMenu />
              </div>
              <MenuItems />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/table/:tableNo/cart"
          element={
            <>
              <Cart handlePaymentSubmit={() => {}} />
            </>
          }
        />
        <Route
          path="/table/:tableNo/order/success"
          element={
            <>
              <div>
                <HomeMenu />
              </div>
              <SuccessPage handleReturnButton={() => {}} />
            </>
          }
        />
        <Route
          path="/table/:tableNo/order/fail"
          element={
            <>
              <div>
                <HomeMenu />
              </div>
              <FailedPage name={'test'} retry={() => {}} />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div>
                <HomeMenu />
              </div>
              <FailedPage name={'test'} retry={() => {}} />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default CustomerRoutes
