import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import About from './About'

describe('About component', () => {
  it('renders h1', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/table/:tableNo/about']}>
        <About />
      </MemoryRouter>
    )

    const h1 = getByText('PokPok')
    expect(h1).toBeInTheDocument()
  })

  it('renders p including "Modern Thai Restaurant And Bar"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/table/:tableNo/about']}>
        <About />
      </MemoryRouter>
    )

    const p = getByText(/Modern Thai Restaurant And Bar/i)
    expect(p).toBeInTheDocument()
  })

  it('renders p including "261 Karangahape Road, Auckland CBD, Auckland 1010"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/table/:tableNo/about']}>
        <About />
      </MemoryRouter>
    )

    const p = getByText(/261 Karangahape Road, Auckland CBD, Auckland 1010/i)
    expect(p).toBeInTheDocument()
  })

  it('renders a button with text "Get In Touch"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/table/:tableNo/about']}>
        <About />
      </MemoryRouter>
    )

    const button = getByText('Get In Touch')
    expect(button).toBeInTheDocument()
  })

  it('renders sns links with text "Instagram"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/table/:tableNo/about']}>
        <About />
      </MemoryRouter>
    )

    const link = getByText('Instagram')
    expect(link).toBeInTheDocument()
  })

  it('renders sns links with text "Facebook"', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/table/:tableNo/about']}>
        <About />
      </MemoryRouter>
    )

    const link = getByText('Facebook')
    expect(link).toBeInTheDocument()
  })
})
