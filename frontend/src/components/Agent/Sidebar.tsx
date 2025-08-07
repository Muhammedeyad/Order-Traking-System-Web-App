import React from 'react'
import { MdAssignmentInd } from "react-icons/md";
import { RiEBikeFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa6";
import { FaRegWindowRestore } from "react-icons/fa6";
import { GrHistory } from "react-icons/gr";
import { MdLogout } from "react-icons/md";



export const Sidebar: React.FC = () => {
    return (
        <div className="d-flex w-15 vh-100 flex-column bg-light  position-fixed top-0 left-0 ">
            <section className='px-4 pt-3 w-100'>
                <h4 className="text-uppercase fw-bold text-primary fs-5"># DashMin</h4>
            </section>
            <section className='d-flex flex-row  gap-3 px-4 w-100 mt-4  '>
                <div>
                    <span className='bg-primary  text-white px-1 py-1 pb-2 rounded-circle shadow fs-2'><RiEBikeFill /></span>
                </div>
                <div className='fs-14'>
                    <h1 className='fs-16 fw-bold p-0 mb-1 '>Harry Potter</h1>
                    <p className='text-secondary p-0 fs-14'>Agent</p>
                </div>
            </section>

            <section className='w-100 mt-3 d-flex flex-column  mt-4' style={{ listStyleType: 'none' }}>
                <li className='d-flex gap-4 font fs-5 align-items-center shadow-sm  bg-white px-4 py-3 cursor-pointer  '>
                    <div className='fs-5'>
                        <span><MdAssignmentInd /></span>
                    </div>
                    <h4 className='m-0 fs-14'>Dashboard</h4>
                </li>
                <li className='d-flex gap-4 font fs-5 align-items-center   px-4 py-3 cursor-pointer  '>
                    <div className='fs-5'>
                        <span><FaLaptop /></span>
                    </div>
                    <h4 className='m-0 fs-14'>Assign Orders</h4>
                </li>
                <li className='d-flex gap-4 font fs-5 align-items-center  px-4 py-3 cursor-pointer  '>
                    <div className='fs-5'>
                        <span><FaRegWindowRestore /></span>
                    </div>
                    <h4 className='m-0 fs-14'>Pick Orders</h4>
                </li>
                <li className='d-flex gap-4 font fs-5 align-items-center   px-4 py-3 cursor-pointer  '>
                    <div className='fs-5'>
                        <span><GrHistory /></span>
                    </div>
                    <h4 className='m-0 fs-14'>Order History</h4>
                </li>
                <li className='d-flex gap-4 font fs-5 align-items-center   px-4 py-3 cursor-pointer  '>
                    <div className='fs-5'>
                        <span><GrHistory /></span>
                    </div>
                    <h4 className='m-0 fs-14'>Profile</h4>
                </li>
                <li className='d-flex gap-4 font fs-5 align-items-center  px-4 py-3 cursor-pointer  '>
                    <div className='fs-5'>
                        <span><MdLogout /></span>
                    </div>
                    <h4 className='m-0 fs-14'>Logout</h4>
                </li>
              
            </section>
        </div>
    )
}
