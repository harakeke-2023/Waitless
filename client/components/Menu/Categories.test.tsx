import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Categories from './Categories'
import { MenuItemMutation } from '../../../models/MenuItem'

describe('Categories component', () => {
  const menuItems: MenuItemMutation[] = [
    {
      id: 1,
      name: 'test 1',
      description: 'description 1',
      price: 15,
      stock: 20,
      image_url: 'test1.jpeg',
      category_id: 2,
      active: true,
    },
    {
      id: 2,
      name: 'test 2',
      description: 'description 2',
      price: 15,
      stock: 20,
      image_url: 'test2.jpeg',
      category_id: 4,
      active: true,
    },
    {
      id: 3,
      name: 'test 3',
      description: 'description 3',
      price: 15,
      stock: 20,
      image_url: 'test3.jpeg',
      category_id: 2,
      active: true,
    },
  ]

  it('Renders item with image, name, and price if the category_id is not 4', () => {
    render(
      <Categories
        category={menuItems}
        fetchNumberOfCartItems={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    )

    const item1 = screen.getByText('test 1')
    expect(item1).toBeInTheDocument()

    const item1Image = screen.getByAltText('test 1')
    expect(item1Image).toHaveAttribute('src', '/images/test1.jpeg')

    const item1Prices = screen.getAllByText('NZD$15.00')
    item1Prices.forEach((price) => {
      expect(price).toBeInTheDocument()
    })

    const item2Image = screen.queryByAltText('test 2')
    expect(item2Image).toBeNull()
  })

  it('Renders items with name and price only if category_id is 4', () => {
    render(
      <Categories
        category={menuItems}
        fetchNumberOfCartItems={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    const item2Prices = screen.queryAllByText('NZD$15.00')
    expect(item2Prices).toHaveLength(2)
    item2Prices.forEach((item) => {
      expect(item).toBeInTheDocument()
    })
  })

  it('Renders the correct number of items', () => {
    render(
      <Categories
        category={menuItems}
        fetchNumberOfCartItems={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    const items = screen.getAllByRole('img')
    expect(items).toHaveLength(2)
  })

  it('Does not render any items if the category array is empty', () => {
    render(
      <Categories
        category={[]}
        fetchNumberOfCartItems={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    )
    const items = screen.queryByRole('img')
    expect(items).not.toBeInTheDocument()
  })
})
