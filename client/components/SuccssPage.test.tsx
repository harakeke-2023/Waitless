import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SuccessPage, { Props as SuccessPageProps } from './SuccessPage'

// test for SuccessPage component
test('renders success page with correct props and checks status button functionality', () => {
  const name = 'John Smith'
  const checkStatusMock = jest.fn()
  render(<SuccessPage name={name} checkStatus={checkStatusMock} />)
  const greetingElement = screen.getByText(`Hey ${name}`)
  expect(greetingElement).toBeInTheDocument()

  const checkStatusButton = screen.getByText('Check status')
  fireEvent.click(checkStatusButton) // Simulate click event on checkStatusButton
  expect(checkStatusMock).toHaveBeenCalled()
})
