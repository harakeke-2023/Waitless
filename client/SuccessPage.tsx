import React from 'react'

interface Props {
  name: string
}

const SuccessPage = ({ name }: Props) => {
  return (
    <div>
      <h1>Hey {name}</h1>
      <p>Your order is confirmed!</p>
      <p>We'll send you a shipping confirmation email</p>
      <button>Check status</button>
    </div>
  )
}

export default SuccessPage
