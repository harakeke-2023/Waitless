import '@testing-library/jest-dom' // <-- add this line

import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import CategoriesNavBar from './CategoriesNavBar'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'
import * as ReactQuery from 'react-query'

describe('Render Footer component', () => {
  beforeEach(() => {
    queryClient = new QueryClient()
  })

  afterEach(() => {
    nock.cleanAll()
  })

  let queryClient: QueryClient

  beforeAll(() => {
    // Mock API endpoint with nock
    nock('http://localhost')
      .get('/api/v1/categories')
      .reply(200, {
        categories: [
          {
            id: 1,
            category_name: 'Appetizers',
          },
          {
            id: 2,
            category_name: 'Fried Rice',
          },
          {
            id: 3,
            category_name: 'Noodles',
          },
          {
            id: 4,
            category_name: 'Drinks',
          },
        ],
      })
  })
  it('renders categoriesNavBar', async () => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
      jest.fn().mockReturnValue({
        data: {
          categories: [
            {
              id: 1,
              category_name: 'Appetizers',
            },
            {
              id: 2,
              category_name: 'Fried Rice',
            },
            {
              id: 3,
              category_name: 'Noodles',
            },
            {
              id: 4,
              category_name: 'Drinks',
            },
          ],
        },
        isLoading: false,
        error: {},
      })
    )
    render(
      <MemoryRouter initialEntries={['/table/:tableNo/menu']}>
        <QueryClientProvider client={queryClient}>
          <CategoriesNavBar
            numberOfCartItems={0}
            fetchNumberOfCartItems={(() => {}) as () => void}
          />
        </QueryClientProvider>
      </MemoryRouter>
    )

    expect(await screen.findByText('Appetizers')).toBeInTheDocument()
  })
})
