import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Cart from './Cart'
import Payment from './Payment'

// Mock data for cart items
const cartitems = [
  {
    categoryid: 1,
    id: 2,
    name: 'Vegetarian Mini Samosas ( 10 pcs)',
    price: 12,
  },
  { categoryid: 2, id: 16, name: 'Tofu Fried Rice', price: 18.8 },
  { categoryid: 3, id: 18, name: 'Pad Thai Duck', price: 21.8 },
  { categoryid: 4, id: 63, name: 'Pinor Gris', price: 9 },
]

// Mock function for handlePaymentSubmit
const mockHandlePaymentSubmit = jest.fn()

// Test for Cart component
test('renders cart items and triggers handlePaymentSubmit on submit payment button click', () => {
  // Render Cart component
  render(<Cart />)

  // Verify cart items are rendered
  for (const item of cartitems) {
    const itemElement = screen.getByText(`${item.name} - $${item.price}`)
    expect(itemElement).toBeInTheDocument()
  }

  // Click on Submit Payment button
  const submitPaymentButton = screen.getByText('Submit Payment')
  fireEvent.click(submitPaymentButton)

  // Verify handlePaymentSubmit function is called
  expect(mockHandlePaymentSubmit).toHaveBeenCalledTimes(1)

  // Reset mock handlePaymentSubmit function
  mockHandlePaymentSubmit.mockClear()
})

// Test for PaymentPage component
test('renders PaymentPage component when payment is submitted', () => {
  // Mock state to simulate payment submitted
  const mockSetPaymentSubmitted = jest.fn()
  const mockIsPaymentSubmitted = true
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initialValue: any) => [
      mockIsPaymentSubmitted,
      mockSetPaymentSubmitted,
    ],
  }))

  // Render Cart component
  render(<Cart />)

  // Verify PaymentPage component is rendered
  const paymentPageElement = screen.getByTestId('payment-page')
  expect(paymentPageElement).toBeInTheDocument()

  // Reset mock state
  jest.clearAllMocks()
  jest.resetModules()
})
