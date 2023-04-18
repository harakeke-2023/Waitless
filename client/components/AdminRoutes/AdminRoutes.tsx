import { Route, Routes } from 'react-router-dom'

import Contact from '../Contact'
import About from '../About'
import OrdersList from './AdminComponents/OrdersList'
import AdminMenuDisplay from './AdminComponents/AdminMenuDisplay'
import AdminHome from './AdminComponents/AdminHome'
import EditMenuItem from './AdminComponents/EditMenuItem'
import AddMenuItem from './AdminComponents/AddMenuItem'
import AdminHomeMenu from './AdminComponents/AdminHomeMenu'

function AdminRoutes() {
  return (
    <>
      <Routes>
        
        <Route path="/admin/about" element={<About />} />
        <Route path="/admin/contact" element={<Contact />} />

        <Route
          path="/admin"
          element={
            <>
              <div>
                <AdminHomeMenu />
              </div>
              <AdminHome />
            </>
          }
        />

        <Route
          path="/admin/about"
          element={
            <>
              <div>
                <AdminHomeMenu />
              </div>
              <About />
            </>
          }
        />

        <Route
          path="/admin/menu"
          element={
            <>
              <div>
                <AdminHomeMenu />
              </div>
              <AdminMenuDisplay />
            </>
          }
        />
        <Route
          path="/admin/menu/add/"
          element={
            <>
              <div>
                <AdminHomeMenu />
              </div>
              <AddMenuItem />
            </>
          }
        />
        <Route
          path="/admin/menu/edit/:id"
          element={
            <>
              <div>
                <AdminHomeMenu />
              </div>
              <EditMenuItem />
            </>
          }
        />
        <Route
          path="/admin/order"
          element={
            <>
              <div>
                <OrdersList />
              </div>
            </>
          }
        />
      </Routes>
    </>
  )
}

export default AdminRoutes
