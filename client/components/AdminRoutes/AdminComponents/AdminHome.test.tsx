import React from 'react'
import { render, fireEvent } from '@testing-library/react'
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
    expect(getByText('Go to Orders')).toBeTruthy()
    expect(getByText('Go to Menu')).toBeTruthy()
  })

  test('handles button clicks for orders', () => {
    const { getByText } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    fireEvent.click(getByText('Go to Orders'))

    expect(window.location.href).toContain('/orders')
  })

  test('handles button clicks for menu', () => {
    const { getByText } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    fireEvent.click(getByText('Go to Menu'))

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

  test('logs correct message for orders button click', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    const { getByText } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    fireEvent.click(getByText('Go to Orders'))

    expect(consoleSpy).toHaveBeenCalledWith(
      'Redirecting to orders export page...'
    )
  })

  test('logs correct message for menu button click', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    const { getByText } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    fireEvent.click(getByText('Go to Menu'))

    expect(consoleSpy).toHaveBeenCalledWith('Redirecting to menu page...')
  })

  test('renders with correct button text', () => {
    const { getByText } = render(
      <Router>
        <AdminHome />
      </Router>
    )

    const ordersButton = getByText('Go to Orders')
    const menuButton = getByText('Go to Menu')

    expect(ordersButton.textContent).toBe('Go to Orders')
    expect(menuButton.textContent).toBe('Go to Menu')
  })

  // Add more test cases for different scenarios and edge cases
})
