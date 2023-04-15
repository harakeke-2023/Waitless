import React from 'react'

export interface Props {
  name: string
  checkStatus: () => void // Define the checkStatus prop
}

const SuccessPage = ({ name, checkStatus }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg text-center">
        <div className="max-w-md mx-auto">
          {' '}
          <h1 className="text-3xl font-bold mb-2">Hey {name}</h1>
          <p className="text-lg text-gray-600 mb-4">Your order is confirmed!</p>
          <p className="text-lg text-gray-600 mb-4">
            We'll send you a shipping confirmation email
          </p>
          <button
            className="bg-blue-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
            onClick={checkStatus}
          >
            Check status
          </button>{' '}
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
