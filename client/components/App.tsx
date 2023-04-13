import { useEffect } from 'react'
import CustomerRoutes from './CustomerRoutes/CustomerRoutes'
import { Header } from './Header'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

function App() {
  useEffect(() => {}, [])

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <CustomerRoutes />
      </>
    </QueryClientProvider>
  )
}

export default App
