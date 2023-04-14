import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Cart from '../components/Cart'

describe('Cart Component', () => {
  const mockHandlePaymentSubmit = jest.fn()

  it('renders Cart component with Payment component', () => {
    render(<Cart handlePaymentSubmit={mockHandlePaymentSubmit} />)

    const itemElement = screen.getByText('Vegetarian Mini Samosas')

    expect(itemElement).toBeInTheDocument()

    const paymentPageElement = screen.getByTestId('payment')
    expect(paymentPageElement).toBeInTheDocument()
  })

  it('triggers handlePaymentSubmit on submit payment button click', () => {
    render(<Cart handlePaymentSubmit={mockHandlePaymentSubmit} />)

    const submitPaymentButton = screen.getByText('Submit Payment')
    fireEvent.click(submitPaymentButton)

    expect(mockHandlePaymentSubmit).toHaveBeenCalledTimes(1)
  })

  it('renders Payment component when payment is submitted', () => {
    render(<Cart handlePaymentSubmit={mockHandlePaymentSubmit} />)

    const submitPaymentButton = screen.getByText('Submit Payment')
    fireEvent.click(submitPaymentButton)

    const paymentComponent = screen.getByTestId('payment')
    expect(paymentComponent).toBeInTheDocument()
  })
})

// import React from 'react'
// import { render, screen, fireEvent } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // Update import for extend-expect

// import Cart from '../components/Cart'

// describe('Cart Component', () => {
//   const mockHandlePaymentSubmit = jest.fn() // Create a mock handlePaymentSubmit function

//   it('renders Cart component with Payment component', () => {
//     render(<Cart handlePaymentSubmit={mockHandlePaymentSubmit} />) // Pass mock handlePaymentSubmit as prop

//     const itemElement = screen.getByText('Vegetarian Mini Samosas')

//     expect(itemElement).toBeInTheDocument() // Use expect(itemElement).toBeInTheDocument() instead of toBeInTheDocument()

//     const paymentPageElement = screen.getByTestId('payment') // Update to use getByTestId
//     expect(paymentPageElement).toBeInTheDocument() // Use expect(paymentPageElement).toBeInTheDocument() instead of toBeInTheDocument()
//   })

//   it('triggers handlePaymentSubmit on submit payment button click', () => {
//     render(<Cart handlePaymentSubmit={mockHandlePaymentSubmit} />) // Pass mock handlePaymentSubmit as prop

//     const submitPaymentButton = screen.getByText('Submit Payment')
//     fireEvent.click(submitPaymentButton) // Trigger click event on submit payment button

//     expect(mockHandlePaymentSubmit).toHaveBeenCalledTimes(1) // Expect handlePaymentSubmit to be called once
//   })

//   it('renders Payment component when payment is submitted', () => {
//     render(<Cart handlePaymentSubmit={mockHandlePaymentSubmit} />) // Pass mock handlePaymentSubmit as prop

//     const submitPaymentButton = screen.getByText('Submit Payment')
//     fireEvent.click(submitPaymentButton) // Trigger click event on submit payment button

//     const paymentComponent = screen.getByTestId('payment-component') // Update to use getByTestId
//     expect(paymentComponent).toBeInTheDocument() // Expect Payment component to be rendered
//   })
// })

// import React from 'react'
// import { render, screen, fireEvent } from '@testing-library/react'
// import { expect } from '@jest/globals'
// import Cart from './Cart'
// import Payment from './Payment'
// import { toBeInTheDocument } from '@testing-library/jest-dom/matchers' // Import toBeInTheDocument matcher

// expect.extend({ toBeInTheDocument }) // Add toBeInTheDocument matcher to expect

// // Mock data for cart items
// const cartitems = [
//   {
//     categoryid: 1,
//     id: 2,
//     name: 'Vegetarian Mini Samosas ( 10 pcs)',
//     price: 12,
//   },
//   { categoryid: 2, id: 16, name: 'Tofu Fried Rice', price: 18.8 },
//   { categoryid: 3, id: 18, name: 'Pad Thai Duck', price: 21.8 },
//   { categoryid: 4, id: 63, name: 'Pinor Gris', price: 9 },
// ]

// // Mock function for handlePaymentSubmit
// const mockHandlePaymentSubmit = jest.fn()

// // Test for Cart Items
// test('renders cart items and triggers handlePaymentSubmit on submit payment button click', () => {
//   // Render Cart component
//   render(<Cart handlePaymentSubmit={mockHandlePaymentSubmit} />) // Pass mock handlePaymentSubmit as prop

//   // Verify cart items are rendered
//   for (const item of cartitems) {
//     const itemElement = screen.getByText(`${item.name} - $${item.price}`)
//     expect(itemElement).toBeInTheDocument()
//   }

//   // Click on Submit Payment button
//   const submitPaymentButton = screen.getByText('Submit Payment')
//   fireEvent.click(submitPaymentButton)

//   // Verify handlePaymentSubmit function is called
//   expect(mockHandlePaymentSubmit).toHaveBeenCalledTimes(1)

//   // Reset mock handlePaymentSubmit function
//   mockHandlePaymentSubmit.mockClear()
// })

// // Test for PaymentPage component
// test('renders PaymentPage component when payment is submitted', () => {
//   // Mock state to simulate payment submitted
//   const mockSetPaymentSubmitted = jest.fn()
//   const mockIsPaymentSubmitted = true
//   jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: (initialValue: any) => [
//       mockIsPaymentSubmitted,
//       mockSetPaymentSubmitted,
//     ],
//   }))

//   // Render Cart component
//   render(<Cart />)

//   // Verify PaymentPage component is rendered
//   const paymentPageElement = screen.getByTestId('payment')
//   expect(paymentPageElement).toBeInTheDocument()

//   // Reset mock state
//   jest.clearAllMocks()
//   jest.resetModules()
// })

// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect' // Update import for extend-expect

// import Cart from '../components/Cart'

// describe('Cart Component', () => {
//   const mockHandlePaymentSubmit = jest.fn() // Create a mock handlePaymentSubmit function

//   it('renders Cart component with Payment component', () => {
//     render(<Cart handlePaymentSubmit={mockHandlePaymentSubmit} />) // Pass mock handlePaymentSubmit as prop

//     const itemElement = screen.getByText('Vegetarian Mini Samosas')
//     expect(itemElement).toBeInTheDocument() // Use expect(itemElement).toBeInTheDocument() instead of toBeInTheDocument()

//     const paymentPageElement = screen.getByTestId('payment') // Update to use getByTestId
//     expect(paymentPageElement).toBeInTheDocument() // Use expect(paymentPageElement).toBeInTheDocument() instead of toBeInTheDocument()
//   })
// })
