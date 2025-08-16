import React from 'react'
import RippleButton from '../../../components/ButtonComponent'
import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'


export const AddressPage: React.FC = () => {
  // const {pathname, state}= useLocation()
  // console.log(pathname, state) // state is used to get the data from where we use programtic navigation like usenavigate
  return (
    <div className="container-fluid d-flex justify-content-center px-3">
  <div className="mt-4 shadow px-3 py-4 col-12 col-sm-6">
        <h4 className='mb-2  text-uppercase'>Delivery Address</h4>
        <Link to={'/addaddress'}><RippleButton className='w-100 rounded-0 mt-1 bg-info text-white border-info py-1 text mt-1 '>Add A New Address</RippleButton></Link>
        <div className='d-flex flex-column gap-3 mt-5'>
          <label htmlFor=""  className='d-flex gap-3 cursor-pointer' >
            <input type="radio" id='male' name='gender' />
            <div>
              <p className='fw-bold'>Mannapparai, RETRET, Trichy</p>
              <p>TamilNadu-613705</p>
            </div>
          </label>
          <label htmlFor="" className='d-flex gap-3 cursor-pointer' >
            <input type="radio" id='female' name='gender' checked={true} />
            <div>
              <p className='fw-bold'>Mannapparai, RETRET, Trichy</p>
              <p>TamilNadu-613705</p>
            </div>
          </label>
        </div>
        <p className='d-flex mt-5 gap-3'><span className='fw-bold '>Payment Type : </span><p>Cash on Delivery</p></p>
        <RippleButton className='mt-3 rounded-0  bg-info border-info text-white  px-4 py-1'>Placed Order</RippleButton>
      </div>
    </div>
  )
}
