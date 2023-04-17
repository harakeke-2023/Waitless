import { useEffect, useState } from 'react'

export function Signup() {
  const [tableNo, setTableNo] = useState('')

  useEffect(() => {
    //fetch current url
    const url = window.location.href
    //split url by /
    const urlArray = url.split('/')
    //get last item in array
    const tableNo = urlArray[urlArray.length - 1]

    if (!isNaN(parseInt(tableNo))) {
      setTableNo(tableNo)
    } else {
      setTableNo('Invalid')
    }
  }, [])

  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="flex justify-center h-screen">
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
            <div className="text-center my-8 border-scarlet-400 border-t-4 border-b-4">
              <h1 className="text-4xl font-bold text-center text-gray-700 my-4 dark:text-scarlet-400">
                Table No: {tableNo}
              </h1>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 uppercase dark:text-white">
                Sign Up
              </h2>

              <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
                Sign up to order your food!
              </p>
            </div>

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
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-700 focus:border-scarlet-400 dark:focus:border-scarlet-400 focus:ring-burgundy-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-8">
              <form>
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
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-zinc-800 dark:text-gray-300 dark:border-gray-700 focus:border-scarlet-400 dark:focus:border-scarlet-400 focus:ring-burgundy-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-scarlet-500 rounded-md hover:bg-scarlet-700 focus:outline-none focus:bg-scarlet-400 focus:ring focus:ring-bungundy-300 focus:ring-opacity-50">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
