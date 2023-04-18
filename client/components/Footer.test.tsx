// write jest test to test the Footer component
import '@testing-library/jest-dom' // <-- add this line

import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'

describe('Render Footer component', () => {
  it('renders copyright text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/© 2023/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "Home" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/Home/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "About" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/About/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "Privacy Policy" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/Privacy Policy/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "Licensing" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/Licensing/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "Contact" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/Contact/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "ODAEATS" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/ODAEATS/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "All Rights Reserved" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/All Rights Reserved/i)
    expect(linkElement).toBeInTheDocument()
  })
})
