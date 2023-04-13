import react from 'react'
interface Props {
  name: string
}

const SuccessPage = (props: Props) => {
  return (
    <div>
      <h1>Hey{props.name} </h1>
      <p>Your order is confirmed!</p>
      <p>We'll send you a shipping confrimation email</p>
      <button>Check status</button>
    </div>
  )
}

export default SuccessPage
