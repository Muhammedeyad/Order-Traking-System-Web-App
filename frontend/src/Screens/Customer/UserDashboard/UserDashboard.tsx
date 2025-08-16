import React from 'react'
import { Product } from '../../../components/Customer/CustomerHome/Product'
import { Catagory } from '../../../components/Customer/CustomerHome/Catagory'
export const UserDashboard: React.FC = () => {
  return (
    <div className='d-flex flex-column '>

      <div className='d-flex row  p-0 m-0'>
        <div className='d-flex flex-sm-column gap-4  mt-sm-3 py-2 py-sm-3 pt-4 shadow  col-sm-1 '>
          <Catagory />
          <Catagory />
          <Catagory />
          <Catagory />
        </div>

        <div className='mt-2  col-sm-10 px-4'>
          <input type="text" className='w-100 mx mt-3 mb-5 px-2 py-2 border-2 rounded-lg border-secondary' placeholder='Search Using Product Name' />
          <div className='d-grid w-100'>
            <div className='row gap-sm-5 gap-2 align-items-center justify-content-center'>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
