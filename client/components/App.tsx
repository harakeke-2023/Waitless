import { useEffect } from 'react'
import CustomerRoutes from './CustomerRoutes/CustomerRoutes'
import { Header } from './Header'

import { QueryClient, QueryClientProvider } from 'react-query'

import { addMenuItem } from '../apis/menuItems'
import Footer from './Footer'

const queryClient = new QueryClient()

function App() {
  useEffect(() => {}, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <CustomerRoutes />
      <Footer />
    </QueryClientProvider>
  )
}

export default App
