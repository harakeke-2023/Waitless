import '@testing-library/jest-dom' // <-- add this line

import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Header component - Button rendering', () => {
  it('renders "Order Now" button on home page', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>
    )

    const orderNowButton = queryByText('Order Now')
    expect(orderNowButton).toBeInTheDocument() // <-- now "toBeInTheDocument" should be recognized
  })

  it('does not render "Order Now" button on about page', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>
    )

    const orderNowButton = queryByText('Order Now')
    expect(orderNowButton).not.toBeInTheDocument() // <-- now "not.toBeInTheDocument" should also be recognized
  })

  it('does not render "Order Now" button on contact pages', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/contact']}>
        <Header />
      </MemoryRouter>
    )

    const orderNowButton = queryByText('Order Now')
    expect(orderNowButton).not.toBeInTheDocument() // <-- now "not.toBeInTheDocument" should also be recognized
  })
})
