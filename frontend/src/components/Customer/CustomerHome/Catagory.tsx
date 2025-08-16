import React from 'react'
import Shirt from './../../../assets/product-4.jpg'

export const Catagory: React.FC = () => {
    return (
        <div className='d-flex w-100  flex-column align-items-center gap-2 cursor-pointer'>
            <div className='rounded-circle w-50 w-25 overflow-hidden '>
                <img src={Shirt} alt="" className='w-100' />
            </div>
            <h4 className='text-black fs-14'>Shirts</h4>
        </div>
    )
}
