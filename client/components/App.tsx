import { useEffect } from 'react'
import CustomerRoutes from './CustomerRoutes/CustomerRoutes'
import { Header } from './Header'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { addMenuItem } from '../apis/menuItems'
const queryClient = new QueryClient()

function App() {
  useEffect(() => {
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <>
        
        <CustomerRoutes />
      </>
    </QueryClientProvider>
  )
}

export default App
