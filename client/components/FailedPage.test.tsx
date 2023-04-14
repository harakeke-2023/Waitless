import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FailedPage from './FailedPage'

// test for FailedPage component
test('renders failed page with correct props and checks retry button functionality', () => {
  const message = 'Payment failed'
  const retryMock = jest.fn()
  render(<FailedPage message={message} retry={retryMock} />)
  const headingElement = screen.getByText('Order Failed')
  expect(headingElement).toBeInTheDocument()

  const messageElement = screen.getByText(message)
  expect(messageElement).toBeInTheDocument()

  const retryButton = screen.getByText('Retry')
  fireEvent.click(retryButton)
  expect(retryMock).toHaveBeenCalled()
})
