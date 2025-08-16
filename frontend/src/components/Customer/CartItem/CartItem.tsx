import React from 'react'
import cartImage from './../../../assets/product-10.jpg'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const CartItem: React.FC = () => {
    return (
        <div className='d-flex justify-content-between row'>
            <div className='d-flex gap-4 col-sm-8 col-8'>
                <div className='w-15 d-sm-block d-none'>
                    <img src={cartImage} className='w-100' alt="" />
                </div>
                <div className='d-flex flex-column gap-1'>
                    <h4 className='fs-sm-2 fs-5'>Shiny Formal Shirt</h4>
                    <p>Formals</p>
                    <p>Price: <span>$450.00</span></p>
                </div>
            </div>
            <div className='d-flex gap-4 justify-content-center align-items-center col-sm-3 col-4'>
                <div className='d-flex gap-2 align-items-center justify-content-center'>
                    <p className='fs-5 fw-bold cursor-pointer'><FaPlus/></p>
                    <p className=' p-0 bg-info p-2 text-white rounded-circle fw-bold'>1</p>
                    <p className='fw-bold cursor-pointer fs-4'><FaMinus/></p>
                </div>
                <div>
                    <p className='fs-4 fw-bold cursor-pointer'><MdDelete/></p>
                </div>
            </div>

        </div>
    )
}
