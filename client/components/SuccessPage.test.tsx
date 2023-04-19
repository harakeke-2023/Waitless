import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import SuccessPage from './SuccessPage'

// test for SuccessPage component
// test('renders success page with correct props and checks status button functionality', () => {
//   const customerDetails = { name: 'John Smith', email: 'john@smith.com' }
//   localStorage.setItem('customerDetails', JSON.stringify(customerDetails))

//   render(<SuccessPage />)

//   const greetingElement = screen.getByText(`Hey ${'John Smith'}`)
//   expect(greetingElement).toBeInTheDocument()

//   const checkStatusButton = screen.getByText('Check status')
//   fireEvent.click(checkStatusButton) // Simulate click event on checkStatusButton
// })

describe('SuccessPage Component', () => {
  beforeEach(() => {
    const customerDetails = { name: 'John Smith', email: 'john@smith.com' }
    localStorage.setItem('customerDetails', JSON.stringify(customerDetails))
  })

  afterEach(() => {
    localStorage.setItem('customerDetails', JSON.stringify([]))
  })

  it('renders success page', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/table/:tableNo/cart']}>
          <SuccessPage />
        </MemoryRouter>
      )
    })

    expect(await screen.findByText('Hello John Smith')).toBeInTheDocument()
  })
})
