import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from './Menu/MenuItem'
import MenuItems from './Menu/MenuItems'

export interface Props {
  name?: string
  handleReturnButton?: () => void
}

const SuccessPage = ({ name, handleReturnButton }: Props) => {
  const [isReturning, setReturn] = useState(true)

  const handleReturnButtonClick = () => {
    console.log('Welcome back to the menu ... ')
  }

  if (isReturning) {
    return (
      <>
        <div>
          <Link to="/table/1/menu">
            {/* Render the HomeMenu component */}
            <MenuItem />
          </Link>
        </div>
        {/* <MenuItems />
        <MenuItem /> */}
        <div className="flex items-center justify-center h-screen">
          <div className="bg-burgundy-600 p-8 rounded-lg text-center">
            <div className="max-w-md mx-auto">
              {isReturning ? (
                <>
                  <div>
                    <p>Thank you for your order!</p>
                    {/* Additional content to display when isReturning is true */}
                  </div>
                  <div className="border border-gray-500 rounded-lg px-6 py-4 mb-6">
                    <h1 className="text-3xl font-bold mb-2">
                      Hello customer{name}
                    </h1>
                    <p className="text-lg text-white-600 mb-4">
                      Your order is confirmed!
                    </p>
                    <p className="text-lg text-white-600 mb-4">
                      We will send you a shipping confirmation email, Please pay
                      at the counter ^ ^
                    </p>
                    <p>Estimated food time 30min</p>
                  </div>
                </>
              ) : null}

              {/* Modify the return button to use Link component */}
              <Link to="/table/1/menu">
                <button
                  className="bg-blue-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                  onClick={handleReturnButtonClick}
                >
                  Return to Menu
                </button>
              </Link>

              {/* Add a Link to HomeMenu component */}
              <Link to="/">
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

// import React, { useState } from 'react'
// import { MenuItem } from './Menu/MenuItem'
// import { Link } from 'react-router-dom'
// import MenuItems from './Menu/MenuItems'

// export interface Props {
//   name: string
//   handleReturnButton: () => void
// }

// const SuccessPage = ({ name, handleReturnButton }: Props) => {
//   const [isReturning, setReturn] = useState(true)

//   const handleReturnButtonClick = () => {
//     console.log('Welcome back to the menu ... ')
//     // Call the provided handleReturnButton function to handle the return to the menu
//     handleReturnButton()
//   }

//   if (isReturning) {
//     return (
//       <>

//         <Link to="/table/1/menu">
//           <button
//             className="bg-blue-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
//             onClick={handleReturnButtonClick}
//           >
//             Return to Menu
//           </button>
//         </Link>
//         {/* Additional JSX code */}
//       </>
//     )
//   }
// }

// export default SuccessPage

// import React, { useState } from 'react'
// import Home from './Home'
// import HomeMenu from './HomeMenu'

// import { MenuItem } from './Menu/MenuItem'
// import { Link } from 'react-router-dom'
// import Cart from './Cart'
// import MenuItems from './Menu/MenuItems'

// export interface Props {
//   name: string
//   handleReturnButton: () => void
// }

// const SuccessPage = ({ name, handleReturnButton }: Props) => {
//   const [isReturning, setReturn] = useState(true)

//   const handleReturnButtonClick = () => {
//     console.log('Welcome back to the menu ... ')
//   }

//   if (isReturning) {
//     return (
//       <>
//         <div>
//           <Link to="/table/1/menu">
//             {/* Render the HomeMenu component */}
//             <MenuItem />
//           </Link>
//         </div>
//         <MenuItems />
//         <MenuItem />
//         <div className="flex items-center justify-center h-screen">
//           <div className="bg-burgundy-600 p-8 rounded-lg text-center">
//             <div className="max-w-md mx-auto">
//               {isReturning ? (
//                 <div>
//                   <p>
//                     Thank you for your order! Please return to the menu to add
//                     more to your order.
//                   </p>
//                   {/* Additional content to display when isReturning is true */}
//                 </div>
//               ) : (
//                 <div className="border border-gray-500 rounded-lg px-6 py-4 mb-6">
//                   <h1 className="text-3xl font-bold mb-2">
//                     Hello customer{name}
//                   </h1>
//                   <p className="text-lg text-white-600 mb-4">
//                     Your order is confirmed!
//                   </p>
//                   <p className="text-lg text-white-600 mb-4">
//                     We'll send you a shipping confirmation email, Please pay at
//                     the counter ^ ^
//                   </p>
//                   <p>Estimated food time 30min</p>
//                 </div>
//               )}

//               {/* Modify the return button to use Link component */}
//               <Link to="/table/1/menu">
//                 <button
//                   className="bg-blue-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
//                   onClick={handleReturnButtonClick}
//                 >
//                   Return to Menu
//                 </button>
//               </Link>

//               {/* Add a Link to HomeMenu component */}
//               <Link to="/">
//                 <button className="bg-blue-500 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 mt-4">
//                   Return Home
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }
// }

// export default SuccessPage
