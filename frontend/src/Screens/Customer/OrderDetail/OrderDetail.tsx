import React from 'react'
import { OrderedItem } from '../../../components/DetailedOrder/OrderedItem'
import { useLocation, useParams } from 'react-router-dom'

export const OrderDetail:React.FC = () => {
  const {oid}= useParams()
  // console.log(oid)
  
  return (
    <div className='w-100 d-flex justify-content-center'>
      <div className='w-75 shadow mt-3 px-3 py-4'>
        <div className='d-flex justify-content-between'>
          <h4 className='fs-4'>ORDER ID: 33493031</h4>
          <div className='d-flex gap-3'>
            <button className='px-4 py-1 fs-14 border-1 text-black fw-bold'>Invoice</button>
            <button className='px-4 py-1 fs-14 bg-info fw-bold text-white border-0'>Track Order</button>
          </div>
        </div>
        <div className='mt-2'>
          <p className='text-success fw-bold'>Order date: Feb, 16, 2025</p>
        </div>
        <div className='d-flex flex-column  mt-5 gap-3 '>
          <OrderedItem/>
          <OrderedItem/>
          <OrderedItem/>
        </div>
        <div className='d-flex border-top border-1  mt-4 justify-content-between py-3'>
          <div className='d-flex flex-column gap-1'>
            <h4 className='fs-5'>Payment Type</h4>
            <p className='fs-14 text-secondary'>COd (Cash On Delivery)</p>
          </div>
          <div className='d-flex flex-column gap-1'>
            <h4 className='fs-5'>Delivery</h4>
            <p className='fs-14 text-secondary'>8745, Jewees Bridge, Apt, 174</p>
          </div>
        </div>

      </div>
    </div>
  )
}
