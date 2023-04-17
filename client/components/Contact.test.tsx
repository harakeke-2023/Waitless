import { render } from '@testing-library/react'
import Contact from './Contact'

describe('Contact component', () => {
  it('should render the correct text', () => {
    const { getByText } = render(<Contact />)

    expect(getByText('AUCKLAND')).toBeInTheDocument()
    expect(getByText('Address : 261 Karangahape Road,')).toBeInTheDocument()
    expect(getByText('Auckland CBD')).toBeInTheDocument()
    expect(getByText('Phone : 09 9639987')).toBeInTheDocument()
    expect(getByText('Operating Hour 5pm - 10pm')).toBeInTheDocument()
    expect(getByText('Order now for PICK UP & DELIVERY')).toBeInTheDocument()
  })
})
