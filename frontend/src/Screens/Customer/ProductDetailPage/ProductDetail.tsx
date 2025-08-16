import React from 'react'
import product1 from '../../../assets/product-4.jpg'
import RippleButton from '../../../components/ButtonComponent'
import { useNavigate } from 'react-router-dom'


export const ProductDetail: React.FC = () => {
  const navigate= useNavigate()
  function handleBringAddressPage(){
    navigate("/address", {
      state: 1
    })
  }
  return (
    <div className='container-fluid w-100 mt-4 d-flex justify-content-center '>
      <div className='w-75 mt-3 bg-white shadow-lg mt-2 d-flex gap-2 row'>
        <div className='col-sm w-100'>
          <img src={product1} alt="" className='w-100' />
        </div>
        <div className='d-flex col flex-column px-3 py-4 justify-content-center'>
          <h3 className='fw-bold'>Zero Shirt Official</h3>
          <h4 className='text-success fs-5'>$999.00</h4>
          <p className='fs-14 text-secondary py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium mollitia possimus tempora debitis voluptas deleniti? In velit ea ab amet hic consectetur laboriosam praesentium, cupiditate voluptatibus a dignissimos pariatur facere!</p>
          <div className='mt-5 d-flex gap-3'>
            <RippleButton className='bg-warning text-uppercase fs-14 px-3 py-2 rounded-0 text-white'>Add To Cart</RippleButton>
            <RippleButton onClick={handleBringAddressPage} className='bg-success text-uppercase fs-14 px-4 py-2 rounded-0 text-white'>Buy Now</RippleButton>
          </div>
        </div>
      </div>
    </div>
  )
}
