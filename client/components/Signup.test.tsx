import {
  fireEvent,
  getAllByTestId,
  getByText,
  render,
  waitFor,
} from '@testing-library/react'

import { Signup } from './Signup'
import { Router } from 'react-router-dom'
// Mock the useNabvigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}))
// Test Suite for Signup

describe('./Signup', () => {
  // Test case for rendering Signup Component

  test('renders sigup form  with name and email address', () => {
    const { getByText } = render(<Signup />)

    // assert that the form component is rendered

    expect(getByText('Name')).toBeTruthy
    expect(getByText('Email Address')).toBeTruthy
  })

  // Test case for successful form submission
  test(' submits form with valid email address', async () => {
    // Mock the form subbmission function
    const mockSubmitForm = jest.fn()

    const { getByLabelText, getByText } = render(<Signup />)

    // Find form elements and fill in form data
    const nameInput = getByLabelText('Name')
    const emailInput = getByLabelText('Email')
    const submitButton = getByText('Order Now')

    fireEvent.change(nameInput, { target: { value: 'Your Name' } })
    fireEvent.change(emailInput, { target: { value: 'name@example.com' } })

    // Trigger form submission
    fireEvent.click(submitButton)

    // Wait for form submission to complete
    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledTimes(1)
      expect(mockSubmitForm).toHaveBeenCalledWith({
        name: 'customer',
        email: 'customer@example.com',
      })
    })
  })
})
