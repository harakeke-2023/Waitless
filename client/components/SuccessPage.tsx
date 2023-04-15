import React from 'react'

export interface Props {
  name: string
  checkStatus: () => void // Define the checkStatus prop
}

const SuccessPage = ({ name, checkStatus }: Props) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-2">Hey {name}</h1>
      <p className="text-lg text-gray-600 mb-4">Your order is confirmed!</p>
      <p className="text-lg text-gray-600 mb-4">
        We'll send you a shipping confirmation email
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={checkStatus}
      >
        Check status
      </button>{' '}
      {/* Use the checkStatus prop as a click handler */}
    </div>
  )
}

export default SuccessPage
