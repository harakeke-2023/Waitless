import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SuccessPage from '../SuccessPage'
// type for name prop
type SuccessPageProps = {
  name: string
}

// test for SuccessPage component
test('renders success page with correct props and checks status button functionality', () => {
  const name = 'John Smith'
  const checkStatusMock = jest.fn()
  render(<SuccessPage name={name} checkSatus={checkStatusMock} />)
  const greetingElement = screen.getByText(`Hey ${name}`)
  expect(greetingElement).toBeInTheDocument()

  const checkStatusButton = screen.getByText('Check status')
})
