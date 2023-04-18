import { OrderDetailsWithName } from '../../../../models/CustomerOrders'

interface Props {
  itemOrdered: OrderDetailsWithName
  isExpanded: boolean
}

export default function AdminOrderMenuItem(props: Props) {
  const { itemOrdered, isExpanded } = props
  return (
    <>
      {isExpanded && (
        <>
          <div className="m-auto my-6 p-4 text-lg border-solid border-black-600 border-2 max-w-lg text-center justify-center md:w-full">
            <h2 className="font-bold py-3 uppercase text-scarlet-600">
              Order Details
            </h2>
            <p>
              <b className="font-bold uppercase px-2">Item name:</b>
              {itemOrdered.menu_item_name}
            </p>
            <p>
              <b className="font-bold uppercase px-2">Quantity:</b>
              {itemOrdered.quantity}
            </p>
            <p>
              <b className="font-bold uppercase px-2">Price:</b>${' '}
              {itemOrdered.price.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </>
  )
}
