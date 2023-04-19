import { render, screen } from '@testing-library/react'
import ItemForm from './ItemForm'
import { MenuItemMutation } from '../../../../models/MenuItem'
import { renderWithRouter } from '../../test~utils'
import { getAllCategories } from '../../../apis/categories'
import '@testing-library/jest-dom'

jest.mock('../../../apis/categories')

describe('item form', () => {
  it('should render the correct text input', async () => {
    jest.mocked(getAllCategories).mockResolvedValue([
      {
        id: 1,
        category_name: 'Veggies',
      },
      {
        id: 2,
        category_name: 'Fruits',
      },
    ])

    const fakeItem: MenuItemMutation = {
      category_id: 0,
      description: '',
      id: 1,
      image_url: '',
      name: '',
      price: 0,
      stock: 0,
      active: true,
    }

    const setMenuItemForEdit = jest.fn()
    renderWithRouter(
      <ItemForm editItem={fakeItem} setMenuItemForEdit={setMenuItemForEdit} />,
      { initialEntries: ['/'], route: '/' }
    )

    const nameInput2 = await screen.findByLabelText(/description/i)
    const nameInput3 = await screen.findByLabelText(/price/i)
    // const nameInput4 = await screen.findByLabelText(/categories/i)
    const nameInput5 = await screen.findByLabelText(/stock/i)

    expect(nameInput2).toBeInTheDocument()
    expect(nameInput3).toBeInTheDocument()
    // expect(nameInput4).toBeInTheDocument()
    expect(nameInput5).toBeInTheDocument()
  })
})
