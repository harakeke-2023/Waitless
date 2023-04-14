import React, { useState } from 'react'

type PaymentProps = {
  handlePaymentSubmit: () => void // Define the prop type for handlePaymentSubmit
}

const Payment: React.FC<PaymentProps> = ({ handlePaymentSubmit }) => {
  // Use React.FC and pass in PaymentProps as the generic type
  const [paymentStatus, setPaymentStatus] = useState(false)

  const handlePayment = () => {
    // Implement your payment logic here
    // You can use external payment libraries or APIs to process the payment
    // Update paymentStatus state based on the payment result
    setPaymentStatus(true) // or 'error' depending on the payment result
    handlePaymentSubmit() // Call the handlePaymentSubmit prop after payment is processed
  }

  return (
    <div data-testid="payment">
      {/* Payment component content */}
      <h2>Payment Status: {paymentStatus ? 'success' : 'pending'}</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  )
}

export default Payment
