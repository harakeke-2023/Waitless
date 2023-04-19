import { Route, Routes } from 'react-router-dom'

import About from '../About'
import AdminOrdersList from './AdminComponents/AdminOrdersList'
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
                <AdminHomeMenu />
              </div>
              <AdminOrdersList />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default AdminRoutes
