import React from 'react'
import { OrderItem } from '../../../components/Customer/Orders/OrderItem'


export const MyOrders: React.FC = () => {
  return (
    <div className=' mx-3 py-3'>
      <h4 className=' fs-4 text-black'>My Orders</h4>
      <div className='mt-3 row  bg-white p-1 d-flex flex-wrap  mx-4 py-3 gap-3 gap-sm-0 '>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />

      </div>
    </div>
  )
}
