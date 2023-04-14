import React from 'react'

export interface Props {
  name: string
  checkStatus: () => void // Define the checkStatus prop
}

const SuccessPage = ({ name, checkStatus }: Props) => {
  return (
    <div>
      <h1>Hey {name}</h1>
      <p>Your order is confirmed!</p>
      <p>We'll send you a shipping confirmation email</p>
      <button onClick={checkStatus}>Check status</button>{' '}
      {/* Use the checkStatus prop as a click handler */}
    </div>
  )
}

export default SuccessPage
