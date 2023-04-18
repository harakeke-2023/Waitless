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
      window.location.href = '/orders'
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
    window.location.href = '/orders'
  }

  const handleMenuClick = () => {
    // Redirect to menu page
    console.log('Redirecting to menu page...') // Added console log
    window.location.href = '/menu'
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome Administrator :|</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        onClick={handleOrdersClick}
      >
        Go to Orders
      </button>
      <button
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        onClick={handleMenuClick}
      >
        Go to Menu
      </button>
    </div>
  )
}

export default AdminHome
