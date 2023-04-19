import '@testing-library/jest-dom'

import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Header component - Button rendering', () => {
  it('renders Home on home page', () => {
    const { queryByText } = render(
      <MemoryRouter initialEntries={['/table/3/']}>
        <Header />
      </MemoryRouter>
    )

    const orderNowButton = queryByText('Home')
    expect(orderNowButton).toBeInTheDocument()
  })
})
