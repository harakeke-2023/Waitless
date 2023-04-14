import { useEffect } from 'react'
import CustomerRoutes from './CustomerRoutes/CustomerRoutes'
import { Header } from './Header'

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { addMenuItem } from '../apis/menuItems'

const queryClient = new QueryClient()

function App() {
  useEffect(() => {
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      
        <Header isHome={true}/>
        <CustomerRoutes />
      
    </QueryClientProvider>
  )
}

export default App
