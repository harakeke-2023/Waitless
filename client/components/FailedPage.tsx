import React from 'react'

interface Props {
  message: string
  retry: () => void
}

const FailedPage = ({ message, retry }: Props) => {
  return (
    <div>
      <h1>Order Failed</h1>
      <p>{message}</p>
      <p>Please contact customer support for assistance</p>
      <button onClick={retry}>Retry</button>
    </div>
  )
}

export default FailedPage
