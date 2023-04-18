import CustomerRoutes from './CustomerRoutes/CustomerRoutes'
import { Header } from './Header'

import { QueryClient, QueryClientProvider } from 'react-query'

import Footer from './Footer'
import AdminRoutes from './AdminRoutes/AdminRoutes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <CustomerRoutes />
      <AdminRoutes />
      <Footer />
    </QueryClientProvider>
  )
}

export default App
