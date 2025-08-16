import React from 'react'
import { CartItem } from '../../../components/Customer/CartItem/CartItem'

export const Cart:React.FC = () => {
  return (
    <div className='w-100 d-flex justify-content-center row'>
        <div className='col-sm-8 col-11 mt-3'>
            <h4 className='fs-4'>Your Cart</h4>
            <div className='d-flex flex-column gap-4 mt-4 w-100'>
                <CartItem/>
                <CartItem/>
            </div>
            <div className='border-1 border-top border-black mt-4 d-flex justify-content-between py-2'>
                <div><h3 className='fs-4 '>Total Prices: <span>$515</span></h3></div>
                <div>
                    <button className='px-3 py-2 bg-info text-white'>Place Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}
