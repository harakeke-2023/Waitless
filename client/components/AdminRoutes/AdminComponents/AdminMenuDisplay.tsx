import { useQuery } from 'react-query'
import { MenuItemMutation } from '../../../../models/MenuItem'

import ScrollToTop from '../../Menu/Scroll/ScrollToTop'
import AdminCategories from './AdminCategories'

export default function AdminMenuDisplay() {
  const { isLoading, data, refetch } = useQuery({
    queryKey: ['menu'],
    queryFn: () => fetch('/api/v1/menuitems').then((res) => res.json()),
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  //This line protects against database table not existing errors.
  if (data.error) {
    console.error(data)
    return <div>Error! {data.error.title} </div>
  }

  //Getting Menu Items by categories
  //APPETIZERS-1
  const appetizersArr = (data || []).menuItems.filter(
    (item: MenuItemMutation) => {
      return item.category_id === 1
    }
  )
  //FRIED RICE -2
  const friedRiceArr = (data || []).menuItems.filter(
    (item: MenuItemMutation) => {
      return item.category_id === 2
    }
  )
  //NOODLES-3
  const noodlesArr = (data || []).menuItems.filter((item: MenuItemMutation) => {
    return item.category_id === 3
  })
  //DRINKS-4
  const drinksArr = (data || []).menuItems.filter((item: MenuItemMutation) => {
    return item.category_id === 4
  })
  return (
    <>
      {/* <CategoriesNavBar /> */}
      <div>
        <a id="appetizers" href="#appetizers">
          <h2 className="m-8 text-2xl font-bold">Appetizers</h2>
        </a>
        <AdminCategories category={appetizersArr} refetch={refetch} />
      </div>

      <div>
        <a id="fried rice" href="#fried rice">
          <h2 className="m-8 text-2xl font-bold">Fried Rice</h2>
        </a>
        <AdminCategories category={friedRiceArr} refetch={refetch} />
      </div>
      <div>
        <a id="noodles" href="#noodles">
          <h2 className="m-8 text-2xl font-bold">Noodles</h2>
        </a>
        <AdminCategories category={noodlesArr} refetch={refetch} />
      </div>
      <div className="flex flex-col">
        <a id="drinks" href="#drinks">
          <h2 className="m-8 text-2xl font-bold">Drinks</h2>
        </a>
        <AdminCategories category={drinksArr} refetch={refetch} />
      </div>
      <ScrollToTop />
    </>
  )
}
