import { useEffect, useState } from 'react'
import { getAllCustomerOrders } from '../../../apis/customerOrders'
import {
  CustomerOrderWithName,
  OrderDetails,
} from '../../../../models/CustomerOrders'
import ScrollToTop from '../../Menu/Scroll/ScrollToTop'

import MenuItemOrder from './MenuItemOrder'
import AdminOrders from './AdminOrder'

export default function AdminOrdersList() {
  const [orders, setOrders] = useState([] as CustomerOrderWithName[])

  useEffect(() => {
    getAllCustomerOrders()
      .then((fetchedOrders) => {
        setOrders(fetchedOrders)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <div className="rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <div>
          <h2 className="font-bold text-3xl uppercase py-6 px-6 max-md:text-center">
            ORDERS
          </h2>
        </div>
        <div className="border-t-4 border-burgundy-500 px-4 py-4">
          <form
            action=""
            id="search"
            className="flex-row-reverse text-right max-md:text-center"
          >
            <label
              htmlFor="search"
              className="font-bold text-lg uppercase px-8"
            >
              Search:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type customer name"
              className="w-1/6 border border-stroke rounded-sm px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent max-md:w-1/2"
            />
          </form>
        </div>
        <table className="w-full table-auto">
          <thead className="bg-zinc-800 text-black-600 px-5 pt-6 pb-2.5 border-b-2 border-stroke">
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[120px] py-4 px-4 font-large text-black text-center uppercase dark:text-white xl:pl-11">
                Order ID
              </th>
              <th className="min-w-[150px] py-4 px-4 font-large text-black text-center uppercase dark:text-white">
                Table Number
              </th>
              <th className="min-w-[120px] py-4 px-4 font-large text-black text-center uppercase dark:text-white">
                Customer Name
              </th>
              <th className="min-w-[120px] py-4 px-4 font-large text-black text-center uppercase dark:text-white">
                Customer Email
              </th>

              <th className="py-4 px-4 font-large text-black text-center uppercase dark:text-white">
                Total Amount
              </th>
              <th className="py-4 px-4 font-large text-black text-center uppercase dark:text-white">
                edit/delete
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <AdminOrders key={order.customer_name} order={order} />
            ))}
          </tbody>
        </table>
      </div>
      <ScrollToTop />
    </div>
  )
}
