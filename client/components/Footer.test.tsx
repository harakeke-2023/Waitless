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

  it('renders "Admin Home" text', () => {
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

  it('renders "about" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/about/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "waitless" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/Waitless/i)
    expect(linkElement).toBeInTheDocument()
  })

  it('renders "All Rights Reserved" text', () => {
    const { getByText } = render(<Footer />)
    const linkElement = getByText(/All Rights Reserved/i)
    expect(linkElement).toBeInTheDocument()
  })
})
