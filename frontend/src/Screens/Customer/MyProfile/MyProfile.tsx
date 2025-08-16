import React from 'react'
import profileImage from './../../../assets/product-10.jpg'
import { MdOutlineExitToApp } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import RippleButton from '../../../components/ButtonComponent';

export const MyProfile: React.FC = () => {
  return (
    <div className='w-100 d-flex justify-content-center  align-items-center ' >
      <div className='w-sm-25 mx-3 shadow mt-4 d-flex flex-column gap-3 align-items-center justify-content-center'>
        <h3 className='mx-5  fs-3 mt-5 mb-0  text-center'>User Profile</h3>
        <div className=' my-2  d-flex flex-column gap-5 align-items-center '>
          <div className=' d-flex flex-column gap-4 align-items-center  '>
            <div className='rounded-circle m-0 w-25 overflow-hidden'>
              <img src={profileImage} alt="" className='w-100' />
            </div>
            <div className='d-flex gap-1 flex-column  mt-3'>
              <h4 className='fs-4 text-primary '>Charlie Chaplin A</h4>
              <div>
                <div className='fs-14 d-flex flex-column gap-1 mt-2'>
                  <h3 className='fs-16'><FaPhoneAlt /> PhoneNumber: <span className=' pl-3 text-black'> 9487031244</span></h3>
                  <h3 className='fs-16'><IoMdMail /> E-Mail: <span className=' pl-3 text-black'>charlie@gmail.com</span> </h3>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex w-100 mb-3'>
            <RippleButton className='w-100  mx-3 d-flex align-items-center justify-content-center px-3 mt-2 gap-3 py-2 fs-16  bg-danger text-white rounded-0 fw-bold'>
              <p className='m-0 p-0 w-100 d-flex gap-2 align-items-center justify-content-center'><span className='m-0 p-0 fw-bold fs-5'><MdOutlineExitToApp /></span><span>Logout</span></p>
            </RippleButton>
          </div>
        </div>

      </div>

    </div>
  )
}
