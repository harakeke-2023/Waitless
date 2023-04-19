import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { QueryObserverResult } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { MenuItemMutation } from '../../../../models/MenuItem';
import AdminCategories from './AdminCategories';

describe('AdminCategories component', () => {
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
    }
  ];
  it('Renders without errors', () => {
    render(<MemoryRouter>
        <AdminCategories category={menuItems} refetch={function (): Promise<QueryObserverResult<{ id: number; name: string; description: string; price: number; stock: number; image_url: string; category_id: number; }[], unknown>> {
            throw new Error('Function not implemented.');
        } } />
    </MemoryRouter>)
   
   expect(screen.getByText('test 1')).toBeInTheDocument();

  });

  it('Does not render any items if the category array is empty', () => {
    render(<AdminCategories category={[]} refetch={function (): Promise<QueryObserverResult<{ id: number; name: string; description: string; price: number; stock: number; image_url: string; category_id: number; }[], unknown>> {
        throw new Error('Function not implemented.');
    } } />);
    const items = screen.queryByRole('heading', {level:2});
    expect(items).not.toBeInTheDocument();
  });
});

