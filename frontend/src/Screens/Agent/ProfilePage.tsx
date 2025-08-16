import React from 'react'
import profileImage from './../../assets/profile.jpg'
import { Navbar } from '../../components/Agent/Navbar'
import RippleButton from '../../components/ButtonComponent'
import { MdOutlineExitToApp } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const ProfilePage: React.FC = () => {
    return (
        <div className='w-100 vh-100 ' style={{ marginLeft: '16%' }}>
            <Navbar />
            <h3 className='mx-5 text-info fw-bold fs-5 mt-4 mb-0 text-uppercase'>User Profile</h3>
            <div className='mx-4 mt-5 my-2  d-flex flex-column gap-5 align-items-center '>
                <div className='d-flex gap-5 align-items-center justify-content-around w-55'>
                    <div className='rounded-circle m-0  overflow-hidden'>
                        <img src={profileImage} alt="" className='w-100' />
                    </div>
                    <div className='d-flex gap-1 flex-column '>
                        <h4 className='fs-4 text-info fw-bold '>Charlie Chaplin A</h4>
                        <div>
                            <div className='fs-14 d-flex flex-column gap-1 mt-2'>
                                <h3 className='fs-16'><FaPhoneAlt /> PhoneNumber: <span className='fw-bold pl-3 text-secondary'> 9487031244</span></h3>
                                <h3 className='fs-16'><IoMdMail /> E-Mail: <span className='fw-bold pl-3 text-secondary'>charlie@gmail.com</span> </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <RippleButton className='w-25 d-flex align-items-center justify-content-center px-3 mt-1 gap-3 py-1 fs-16  bg-danger text-white rounded-0 fw-bold'>
                    <p className='m-0 p-0 w-100 d-flex gap-2 align-items-center justify-content-center'><span className='m-0 p-0 fw-bold fs-5'><MdOutlineExitToApp /></span><span>Logout</span></p>
                </RippleButton>
            </div>

        </div>
    )
}
