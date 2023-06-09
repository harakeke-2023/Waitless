import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { CustomerDetails } from '../../models/CustomerOrders'

const SuccessPage = () => {
  const { tableNo } = useParams()
  console.log(tableNo)
  const customerDetails: CustomerDetails = JSON.parse(
    localStorage.getItem('customerDetails') as string
  ) || { name: '', email: '' }
  const { name, email } = customerDetails

  const [isReturning, setReturn] = useState(true)

  const handleReturnButtonClick = () => {}

  if (isReturning) {
    return (
      <>
        <div className="flex items-center justify-center my-7 ">
          <div className="bg-burgundy-600 p-8 rounded-lg text-center text-white">
            <div className="max-w-md mx-auto">
              {isReturning ? (
                <>
                  <div>
                    <p>Thank you for your order!</p>
                    {/* Additional content to display when isReturning is true */}
                  </div>
                  <div className="border border-gray-500 rounded-lg px-6 py-4 mb-6">
                    <h1 className="text-3xl font-bold mb-2">Hello {name}</h1>
                    <p className="text-lg text-white mb-4">
                      Your order is confirmed!
                    </p>
                    <p className="text-lg text-white mb-4">
                      Please pay at the counter ^ ^
                    </p>
                    <p>Estimated food time 30min</p>
                  </div>
                </>
              ) : null}

              {/* Modify the return button to use Link component */}
              <Link to={`/table/${tableNo}/menu`}>
                <button className="bg-blue-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
                  Return to Menu
                </button>
              </Link>

              {/* Add a Link to HomeMenu component */}
              <Link to={`/table/${tableNo}/`}>
                <button className="bg-blue-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 mt-4">
                  Return Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
  return <></>
}

export default SuccessPage
