import React, { useState } from 'react'
import Home from './Home'
import HomeMenu from './HomeMenu'

export interface Props {
  name: string
  handleReturnButton: () => void
}

const SuccessPage = ({ name, handleReturnButton }: Props) => {
  const [isReturning, setReturn] = useState(false)

  const handleReturnButtonClick = () => {
    handleReturnButton()
    setReturn(true)
    console.log('Welcome back... ')
  }

  return (
    // <div className="bg-beige-500 text-brown-900 p-8 rounded-lg shadow-md">
    //   <h1 className="text-4xl font-bold mb-4">Success!</h1>
    //   <p className="text-lg">Your order has been placed successfully.</p>
    //   <p className="text-lg">Thank you for your purchase.</p>
    // </div>

    <div className="flex items-center justify-center h-screen">
      <div className="bg-burgundy-600 p-8 rounded-lg text-center">
        <div className="max-w-md mx-auto">
          <div className="border border-gray-500 rounded-lg px-6 py-4 mb-6">
            <h1 className="text-3xl font-bold mb-2">Hey {name}</h1>
            <p className="text-lg text-white-600 mb-4">
              Your order is confirmed!
            </p>
            <p className="text-lg text-white-600 mb-4">
              We'll send you a shipping confirmation email
            </p>
          </div>

          <button
            className="bg-blue-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
            onClick={handleReturnButtonClick}
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
