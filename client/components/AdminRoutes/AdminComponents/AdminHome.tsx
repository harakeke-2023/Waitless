import { useEffect } from 'react'

const AdminHome = () => {
  useEffect(() => {
    // Fetch current URL
    const url = window.location.href

    // Check if the URL contains '/orders'
    if (url.includes('/orders')) {
      // Redirect to orders export page
      window.location.href = '/order'
    }

    // Check if the URL contains '/menu'
    if (url.includes('/menu')) {
      // Redirect to menu page
      window.location.href = '/menu'
    }
  }, [])

  const handleOrdersClick = () => {
    // Redirect to orders export page
    window.location.href = '/admin/order'
  }

  const handleMenuClick = () => {
    // Redirect to menu page

    window.location.href = '/admin/menu/'
  }

  return (
    <div className="box-border h-max  flex flex-col items-center justify-center bg-burgundy-600 opacity-100 ">
      <div className="border-2 border-white  bg-beige-600 rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-8 text-black">
          Welcome Administrator
        </h1>
        <div className="flex flex-col items-center">
          <button
            data-testid="go to orders list"
            className="w-full mt-4 bg-burgundy-400 hover:bg-beige-800 text-beige font-semibold py-2 px-4 rounded"
            onClick={handleOrdersClick}
          >
            Go to Order List
          </button>
          <button
            data-testid="go to menu"
            className="w-full mt-4 bg-burgundy-400 hover:bg-beige-800 text-beige font-semibold py-2 px-4 rounded"
            onClick={handleMenuClick}
          >
            Go to Menu
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminHome
