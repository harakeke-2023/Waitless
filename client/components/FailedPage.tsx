// import React from 'react'

// interface Props {
//   message: string
//   retry: () => void
// }

// const FailedPage = ({ message, retry }: Props) => {
//   return (
//     <div>
//       <h1>Order Failed</h1>
//       <p>{message}</p>
//       <p>Please contact customer support for assistance</p>
//       <button onClick={retry}>Retry</button>
//     </div>
//   )
// }

// export default FailedPage

import React from 'react'

export interface Props {
  name: string
  retry: () => void // Define the checkStatus prop
}

const FailedPage = ({ message, retry }: Props) => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-2">Order failed </h1>
      <p className="text-lg text-gray-600 mb-4">{message}</p>
      <p className="text-lg text-gray-600 mb-4">
        Please contact customer support for assistance
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={retry}
      >
        Retry
      </button>
    </div>
  )
}

export default FailedPage
