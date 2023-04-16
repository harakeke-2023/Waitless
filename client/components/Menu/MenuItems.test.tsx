/* eslint-disable jest/no-commented-out-tests */
// import { render, screen, act, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import nock from 'nock';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import MenuItems from './MenuItems';

// describe('MenuItems component', () => {
//   let queryClient: QueryClient;

//   beforeAll(() => {
//     // Mock API endpoint with nock
//     nock('http://localhost')
//       .get('/api/v1/menuitems')
//       .reply(200, {
//         menuItems:  [
//           {
//             id: 1,
//             name: 'Dumplings',
//             description: "",
//             image_url: 'dumplings.jpeg',
//             price: 'NZD$10',
//             stock: 2,
//             category_id: 1,
//           },
//           {
//             id: 2,
//             name: 'Fried Rice',
//             description: "",
//             image_url: 'fried-rice.jpeg',
//             price: 'NZD$12',
//             stock: 30,
//             category_id: 2,
//           },
//           {
//             id: 3,
//             name: 'Pad Thai',
//             description: "",
//             image_url: 'pad-thai.jpeg',
//             price: 'NZD$15',
//             stock: 30,
//             category_id: 3,
//           },
//           {
//             id: 4,
//             name: 'Coke',
//             description:"",
//             image_url: 'coke.jpeg',
//             price: 'NZD$3',
//             stock: 20,
//             category_id: 4,
//           },
//         ],
//       });
//   });

//   beforeEach(() => {
//     queryClient = new QueryClient();
//   });

//   afterEach(() => {
//     nock.cleanAll();
//   });

//   it('renders loading message when fetching data', async () => {
//     await act(async () => {
//         render(
//           <QueryClientProvider client={queryClient}>
//             <MenuItems />
//           </QueryClientProvider>
//         );
//       });
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });

//   it('renders categories and menu items when data is fetched', async () => {
//     act(() => {
//       render(
//         <QueryClientProvider client={queryClient}>
//           <MenuItems />
//         </QueryClientProvider>
//       );
//     });

//     await waitFor(() => {
//       expect(screen.queryByText('Appetizers')).toBeInTheDocument();
//       expect(screen.queryByText('Fried Rice')).toBeInTheDocument();
//       expect(screen.queryByText('Noodles')).toBeInTheDocument();
//       expect(screen.queryByText('Drinks')).toBeInTheDocument();
//     });
//     await waitFor(() => {
//         expect(screen.queryByText('Dumplings')).toBeInTheDocument();
//         expect(screen.queryByText('Fried Rice')).toBeInTheDocument();
//         expect(screen.queryByText('Pad Thai')).toBeInTheDocument();
//         expect(screen.queryByText('Coke')).toBeInTheDocument();
//     })

//   });
// })

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MenuItemMutation } from '../../../models/MenuItem';
import MenuItems from './MenuItems';

describe('MenuItems component', () => {
  const menuItems: MenuItemMutation[] = [
    {
      id: 1,
      name: 'test 1',
      description: 'description 1',
      price: 15,
      stock: 20,
      image_url: 'test1.jpeg',
      category_id: 2,
    },
    {
      id: 2,
      name: 'test 2',
      description: 'description 2',
      price: 15,
      stock: 20,
      image_url: 'test2.jpeg',
      category_id: 4,
    },
    {
      id: 3,
      name: 'test 3',
      description: 'description 3',
      price: 15,
      stock: 20,
      image_url: 'test3.jpeg',
      category_id: 2,
    },
  ];

  it('renders loading message when fetching data', () => {
   const queryClient = new QueryClient();
    act(() => {
      render(
        <QueryClientProvider client={queryClient}>
          <MenuItems />
        </QueryClientProvider>
      );
    });

    const loading = screen.getByText(/Loading/i);
    expect(loading).toBeInTheDocument();
});

  it('renders categories and menu items when data is fetched', async () => {
    const queryClient = new QueryClient();
    act(() => {
        render(
            <QueryClientProvider client={queryClient}>
                <MenuItems />
            </QueryClientProvider>
        );

    });
    expect(screen.findByRole('heading', {level: 2})).toBeInTheDocument();

//   it('Renders items with name and price only if category_id is 4', () => {
//     render(<Categories category={menuItems} />);
//     const item2Prices = screen.queryAllByText('NZD$15');
//     expect(item2Prices).toHaveLength(2);
//     item2Prices.forEach((item) => {
//         expect(item).toBeInTheDocument();
// });

//   });

//   it('Renders the correct number of items', () => {
//     render(<Categories category={menuItems} />);
//     const items = screen.getAllByRole('img');
//     expect(items).toHaveLength(2);
//   });

//   it('Does not render any items if the category array is empty', () => {
//     render(<Categories category={[]} />);
//     const items = screen.queryByRole('img');
//     expect(items).not.toBeInTheDocument();
  });
})
