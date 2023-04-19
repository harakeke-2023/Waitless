import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Cart from './Cart'
import { MemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

describe('Cart Component', () => {
  beforeEach(() => {
    const cartItems = JSON.stringify([
      {
        active: true,
        category_id: 2,
        category_name: 'Fried Rice',
        description: '',
        id: 14,
        image_url: 'fried-rice-with-cashew-nuts.jpeg',
        name: 'Fried Rice With Cashew Nuts',
        price: 19.8,
        quantity: 1,
        stock: 20,
      },
      {
        active: true,
        category_id: 2,
        category_name: 'Fried Rice',
        description: '',
        id: 13,
        image_url: 'tom-yum-fried-rice.jpeg',
        name: 'Tom Yum Fried Rice',
        price: 18.8,
        quantity: 1,
        stock: 20,
      },
    ])
    localStorage.setItem('cart', cartItems)
  })

  afterEach(() => {
    localStorage.setItem('cart', JSON.stringify([]))
  })

  it('renders cart Items', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/table/:tableNo/cart']}>
          <Cart />
        </MemoryRouter>
      )
    })

    expect(
      await screen.findByText('Fried Rice With Cashew Nuts')
    ).toBeInTheDocument()
    expect(await screen.findByText('Tom Yum Fried Rice')).toBeInTheDocument()
  })
})
