import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import MenuItems from '../Menu/MenuItems'

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

        <Route
          path="/table/:tableNo/about"
          element={
            <>
              <div>
                <HomeMenu />
              </div>
              <About />
            </>
          }
        />

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
        <Route
          path="/table/:tableNo/cart"
          element={
            <>
              <div>
                <HomeMenu />
              </div>
              <Cart />
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
              <SuccessPage />
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
