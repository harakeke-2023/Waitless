import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import Contact from '../Contact'
import About from '../About'
import OrdersList from './AdminComponents/OrdersList'
import AdminMenuDisplay from './AdminComponents/AdminMenuDisplay'
import AdminHome from './AdminComponents/AdminHome'
import EditMenuItem from './AdminComponents/EditMenuItem'
import AddMenuItem from './AdminComponents/AddMenuItem'

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminHome />} />

        <Route path="/admin/about" element={<About />} />

        <Route
          path="/admin/menu"
          element={
            <>
              <AdminMenuDisplay />
            </>
          }
        />
        <Route
          path="/admin/menu/add/"
          element={
            <>
              <AddMenuItem />
            </>
          }
        />
        <Route
          path="/admin/menu/edit/:id"
          element={
            <>
              <EditMenuItem />
            </>
          }
        />
        <Route path="/admin/contact" element={<Contact />} />

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
