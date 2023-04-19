import React from 'react'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import AdminHome from './AdminHome'

describe('AdminHome component', () => {
  test('does not redirect for unknown URL', () => {
    // Mock window.location to an unknown URL
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { href: 'http://localhost/admin' },
    })

    const { getByText } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    expect(getByText('Welcome Administrator')).toBeTruthy()
    expect(getByText('Go to Order List')).toBeTruthy()
    expect(getByText('Go to Menu')).toBeTruthy()
  })

  test('handles button clicks for orders', () => {
    const { getByTestId } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    fireEvent.click(getByTestId('go to orders list'))

    expect(window.location.href).toContain('/order')
  })

  test('handles button clicks for menu', () => {
    const { getByTestId } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    fireEvent.click(getByTestId('go to menu'))

    expect(window.location.href).toContain('/menu')
  })

  test('does not redirect for unknown URL', () => {
    // Mock window.location.href to an unknown URL
    delete (window as any).location
    ;(window as any).location = { href: 'http://localhost/admin' }

    const { getByText } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    // Assert that no redirection occurs
    expect((window as any).location.href).toBe('http://localhost/admin')
    const welcomeText = getByText('Welcome Administrator')

    expect(welcomeText).toBeTruthy()
  })

  test('renders with correct button text', () => {
    const { getByTestId } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    const ordersButton = getByTestId('go to orders list')
    const menuButton = getByTestId('go to menu')

    expect(ordersButton.textContent).toBeTruthy()
    expect(menuButton.textContent).toBeTruthy()
  })

  // Add more test cases for different scenarios and edge cases
})
