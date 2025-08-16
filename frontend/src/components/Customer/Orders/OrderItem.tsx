import { CTableDataCell, CTableRow, CTableHeaderCell } from '@coreui/react'
import React from 'react'
import RippleButton from '../../ButtonComponent'
import { Link } from 'react-router-dom'


export const OrderItem: React.FC = () => {
  return (
    <div className=' d-flex gap-1 shadow flex-column rounded p-3 gap-1 text-black col-sm-3'>
      <h4 className='fs-5'>OrderId: #39220</h4>
      <p>Payment Type: COD</p>
      <p>Total Price: $330.00</p>
      <p>Order Date: 22/02/2022</p>
      <div>
        <Link to={'/orderDetail/34'}><RippleButton className='bg-info text-white mt-3 rounded-0'>Track Your Order</RippleButton></Link>
      </div>
    </div>
  )
}
