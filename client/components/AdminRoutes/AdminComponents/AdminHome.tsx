import React, { useEffect } from 'react'

const AdminHome = () => {
  useEffect(() => {
    // Fetch current URL
    const url = window.location.href

    console.log('/admin', url) // Added console log

    // Check if the URL contains '/orders'
    if (url.includes('/orders')) {
      // Redirect to orders export page
      console.log('Redirecting to orders export page...') // Added console log
      window.location.href = '/order'
    }

    // Check if the URL contains '/menu'
    if (url.includes('/menu')) {
      // Redirect to menu page
      console.log('Redirecting to menu page...') // Added console log
      window.location.href = '/menu'
    }
  }, [])

  const handleOrdersClick = () => {
    // Redirect to orders export page
    console.log('Redirecting to orders export page...') // Added console log
    window.location.href = '/admin/order'
  }

  const handleMenuClick = () => {
    // Redirect to menu page
    console.log('Redirecting to menu page...') // Added console log
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
            className="w-full mt-4 bg-burgundy-400 hover:bg-beige-800 text-beige font-semibold py-2 px-4 rounded"
            onClick={handleOrdersClick}
          >
            Go to Order List
          </button>
          <button
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
{
  /* <div className="box-border h-full w-full flex flex-col items-center justify-center border-lime-800 bg-burgundy-600 opacity-100">
  <div className="border-2 border-white rounded-lg p-8">
    <h1 className="text-4xl font-bold mb-8 text-white">Welcome Administrator</h1>
    <div className="flex flex-col items-center">
      <button
        className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-black font-semibold py-2 px-4 rounded"
        onClick={handleOrdersClick}
      >
        Go to Orders
      </button>
      <button
        className="w-full mt-4 bg-green-500 hover:bg-green-700 text-black font-semibold py-2 px-4 rounded"
        onClick={handleMenuClick}
      >
        Go to Menu
      </button>
    </div>
  </div>
</div> */
}
