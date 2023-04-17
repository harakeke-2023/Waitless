import React from 'react'
import TestRenderer from 'react-test-renderer'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SuccessPage, { Props as SuccessPageProps } from './SuccessPage'

// test for SuccessPage component
test('renders success page with correct props and checks status button functionality', () => {
  const customerDetails = { name: 'John Smith', email: 'john@smith.com' }

  render(<SuccessPage />)
  localStorage.setItem('customerDetails', JSON.stringify(customerDetails))

  const greetingElement = screen.getByText(`Hey ${'John Smith'}`)
  expect(greetingElement).toBeInTheDocument()

  const checkStatusButton = screen.getByText('Check status')
  fireEvent.click(checkStatusButton) // Simulate click event on checkStatusButton
})
