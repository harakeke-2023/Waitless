import { useEffect } from 'react'
import CustomerRoutes from './CustomerRoutes/CustomerRoutes'
import { Header } from './Header'
import HomeMenu from './HomeMenu'

function App() {
  useEffect(() => {}, [])

  return (
    <>
      <Header />
      
      <CustomerRoutes />
    </>
  )
}

export default App
