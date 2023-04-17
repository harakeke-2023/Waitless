/* eslint-disable jest/no-commented-out-tests */
import '@testing-library/jest-dom';
import nock from 'nock'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import * as ReactQuery from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MenuItemMutation } from '../../../models/MenuItem'
import MenuItems from './MenuItems'


describe('MenuItems component', () => {
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
      .get('/api/v1/menuitems')
      .reply(200, {
        menuItems: [
          {
            id: 1,
            name: 'Dumplings',
            description: '',
            image_url: 'dumplings.jpeg',
            price: 'NZD$10',
            stock: 2,
            category_id: 1,
          },
          {
            id: 2,
            name: 'Fried Rice',
            description: '',
            image_url: 'fried-rice.jpeg',
            price: 'NZD$12',
            stock: 30,
            category_id: 2,
          },
          {
            id: 3,
            name: 'Pad Thai',
            description: '',
            image_url: 'pad-thai.jpeg',
            price: 'NZD$15',
            stock: 30,
            category_id: 3,
          },
          {
            id: 4,
            name: 'Coke',
            description: '',
            image_url: 'coke.jpeg',
            price: 'NZD$3',
            stock: 20,
            category_id: 4,
          },
        ],
      })
  })

  it('renders loading message when fetching data', async () => {
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <MenuItems />
        </QueryClientProvider>
      )
    })
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders categories and menu items when data is fetched', async () => {
    jest.spyOn(ReactQuery, 'useQuery')
      .mockImplementation(
        jest.fn().mockReturnValue({
          data: {
            menuItems: [
              {
                id: 1,
                name: 'Dumplings',
                description: '',
                image_url: 'dumplings.jpeg',
                price: 'NZD$10',
                stock: 2.00,
                category_id: 1,
              },
              {
                id: 2,
                name: 'Fried Rice',
                description: '',
                image_url: 'fried-rice.jpeg',
                price: 'NZD$12',
                stock: 30.00,
                category_id: 2,
              },
              {
                id: 3,
                name: 'Pad Thai',
                description: '',
                image_url: 'pad-thai.jpeg',
                price: 'NZD$15',
                stock: 30,
                category_id: 3,
              },
              {
                id: 4,
                name: 'Coke',
                description: '',
                image_url: 'coke.jpeg',
                price: 'NZD$3',
                stock: 20.00,
                category_id: 4,
              },
            ],
          }, isLoading: false, error: {}
        })
      )

    render(
      <QueryClientProvider client={new QueryClient()}>
        <MenuItems />
      </QueryClientProvider>
    )

    expect(await screen.findByText('Appetizers')).toBeInTheDocument()
    expect(await screen.findByText('Noodles')).toBeInTheDocument()
    expect(await screen.findByText('Drinks')).toBeInTheDocument()
    expect(await screen.findByText('Dumplings')).toBeInTheDocument()
    expect(await screen.findByText('Pad Thai')).toBeInTheDocument()
    expect(await screen.findByText('Coke')).toBeInTheDocument()
  })
})

