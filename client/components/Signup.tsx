import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CustomerDetails } from '../../models/CustomerOrders'

export function Signup() {
  // Handles navigation of form submission having email and name
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  } as CustomerDetails)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    // Handles form data
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    // Handles form submission
    event.preventDefault()
    // Checks if email and name are valid
    if (formData.email && formData.name) {
      // Navigate to order page
      navigate(
        `/table/${tableNo}/menu?email=${formData.email}&name=${formData.name}`
      )
    }
  }

  // Handles table number from url
  // const [tableNo, setTableNo] = useState('')
  const { tableNo } = useParams()

  // useEffect(() => {
  //   setTable
  // }, [])
  function orderNowClick() {
    localStorage.setItem('customerDetails', JSON.stringify(formData))
  }

  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="flex justify-center h-auto py-3 sm:h-screen sm:py-0 ">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1566897596700-a355fbf0c8e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)',
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-8xl font-bold text-scarlet-400 uppercase text-shadow-[0_6px_10px_var(--tw-shadow-color)] shadow-burgundy-300/50">
                Pok Pok
              </h2>

              <p className="max-w-xl mt-3 text-2xl text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <img
                src="./images/logo/finallogo08.png"
                alt="logo"
                className="my-4 max-lg:max-w-[50%] max-h-none mx-auto"
              />
            </div>
            <div className="text-center my-8 border-scarlet-400 border-t-4 border-b-4">
              <h1 className="text-4xl font-bold text-center text-gray-700 my-4 dark:text-scarlet-400">
                Table No: {Number(tableNo) || 0}
              </h1>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 uppercase dark:text-white">
                Enter your details :
              </h2>

              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                Sign up to order your food!
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="name"
                    className="text-lg text-gray-600 uppercase dark:text-gray-200 "
                  >
                    Name
                  </label>
                </div>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-700 focus:border-scarlet-400 dark:focus:border-scarlet-400 focus:ring-burgundy-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>

              <div className="mt-8">
                <div>
                  <label
                    htmlFor="email"
                    className="text-lg block mb-2 text-md text-gray-600 uppercase dark:text-gray-200"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-700 focus:border-scarlet-400 dark:focus:border-scarlet-400 focus:ring-burgundy-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>

                <div className="mt-6">
                  <button
                    onClick={orderNowClick}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-scarlet-500 rounded-md hover:bg-scarlet-700 focus:outline-none focus:bg-scarlet-400 focus:ring focus:ring-bungundy-300 focus:ring-opacity-50"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
