import React from 'react'

interface Props {
  message: string
}

const FailedPage = (props: Props) => {
  return (
    <div>
      <h1>Order Failed</h1>
      <p>{props.message}</p>
      <p>Please contact customer support for assistance</p>
      <button>Retry</button>
    </div>
  )
}

export default FailedPage
