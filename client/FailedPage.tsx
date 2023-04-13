import React from 'react'

interface Props {
  message: string
}

const FailedPage = ({ message }: Props) => {
  return (
    <div>
      <h1>Order Failed</h1>
      <p>{message}</p>
      <p>Please contact customer support for assistance</p>
      <button>Retry</button>
    </div>
  )
}

export default FailedPage
