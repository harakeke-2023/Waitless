import { screen } from '@testing-library/react'
import HomeMenu from './HomeMenu'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRouter } from './test~utils'

describe('HomeMenu', () => {
  test('Link to have assigned text content', () => {
    renderWithRouter(<HomeMenu />)

    const links = screen.getAllByRole('listitem')
    expect(links).toHaveLength(3)
    expect(links[0]).toHaveTextContent('Home')
    expect(links[1]).toHaveTextContent('Menu')
  })
})
