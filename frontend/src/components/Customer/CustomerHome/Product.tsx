import React from 'react'
import CatagoryImg from './../../../assets/product-4.jpg'
import RippleButton from '../../ButtonComponent'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";


export const Product: React.FC = () => {
    return (
        <div  className='border-1 px-0 col-md-2 col-sm-5 col-5  border-secondary   d-flex flex-column  rounded-1  justify-content-center align-items-center shadow-lg cursor-pointer '>
            <Link to={'/productDetail/34'}>
            <div className='w-100 m-0 overflow-hidden p-0 m-0'>
                <img src={CatagoryImg} alt="" className='w-100 m-0 p-0'/>
            </div>
            </Link>
            <div className='m-0 p-0 text-center py-2 d-flex flex-column gap-2'>
                <h1 className='p-0 m-0  fs-6 fs-md-5'>Zeero Shirt</h1>
                <p>$ 999.00</p>
                <div>
                    <RippleButton className='m-0 bg-info text-white rounded-0 fs-14 d-flex align-items-center gap-2'><FaShoppingCart/>Add To Cart</RippleButton>
                    
                </div>
            </div>
            
        </div>
    )
}
