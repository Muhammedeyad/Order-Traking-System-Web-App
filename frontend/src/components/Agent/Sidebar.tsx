import React from 'react'
import { MdAssignmentInd } from "react-icons/md";
import { RiEBikeFill } from "react-icons/ri";
import { FaDove, FaLaptop } from "react-icons/fa6";
import { FaRegWindowRestore } from "react-icons/fa6";
import { GrHistory } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
import RippleButton from '../ButtonComponent';



export const Sidebar: React.FC = () => {
    return (
        <div className='d-flex w-100'>
            <div className="d-flex w-15 vh-100 flex-column bg-light  position-fixed top-0 left-0 w-100">
                <section className='px-4 pt-3 w-100'>
                    <h4 className="text-uppercase fw-bold text-info fs-5"># DashMin</h4>
                </section>
                <section className='d-flex flex-row  gap-4 px-4 w-100 mt-4 border-1 border-bottom-secondary '>
                    <div>
                        <span className='bg-info m-0 pt-0 p-2  text-white  rounded-circle shadow fs-3 '><RiEBikeFill /></span>
                    </div>
                    <div className='fs-14'>
                        <h1 className='fs-16 fw-bold p-0 mb-1 '>Harry Potter</h1>
                        <p className='text-secondary p-0 fs-14'>Agent</p>
                    </div>
                </section>

              <section className='w-100 mt-3 d-flex   flex-column  position-relative h-100  mt-4' style={{ listStyleType: 'none' }}>
                    <RippleButton className="m-0 p-0 rounded-0"><Link to={'/agent/dashboard'} className='d-flex decoration-none gap-4 font fs-5 align-items-center shadow-sm text-black px-4 py-2 fs-5ursor-pointer rounded-0 '>
                        <div className='fs-5'>
                            <span><MdAssignmentInd /></span>
                        </div>
                        <h4 className='m-0 fs-14 py-2' >Dashboard</h4>
                    </Link>
                    </RippleButton>
                    <RippleButton className="m-0 p-0 rounded-0"><Link to={"/agent/assignorders"} className='d-flex gap-4 decoration-none text-black font fs-5 align-items-center bg-info text-white   px-4 py-2 fs-5 cursor-pointer  rounded-0'>
                        <div className='fs-5'>
                            <span><FaLaptop /></span>
                        </div>
                        <h4 className='m-0 fs-14 py-2'>Assign Orders</h4>
                    </Link></RippleButton>
                    <RippleButton className="m-0 p-0 rounded-0"><Link to={"/agent/pendingorders"} className='d-flex gap-4 decoration-none text-black font fs-5 align-items-center  px-4 py-2 fs-5 cursor-pointer  rounded-0'>
                        <div className='fs-5'>
                            <span><FaRegWindowRestore /></span>
                        </div>
                        <h4 className='m-0 fs-14 py-2' >Pending Orders</h4>
                    </Link>
                    </RippleButton>
                    <RippleButton className="m-0 p-0 rounded-0"><Link to={"/agent/pickedordershistory"} className='d-flex gap-4 decoration-none text-black font fs-5 align-items-center   px-4 py-2 fs-5 cursor-pointer  rounded-0'>
                        <div className='fs-5'>
                            <span><GrHistory /></span>
                        </div>
                        <h4 className='m-0 fs-14 py-2' >Order History</h4>
                    </Link></RippleButton>
                    <RippleButton className="m-0 p-0 rounded-0"><Link  to={"/agent/profile"} className='d-flex gap-4 decoration-none text-black font fs-5 align-items-center   px-4 py-2 fs-5 cursor-pointer  rounded-0'>
                        <div className='fs-5'>
                            <span><GrHistory /></span>
                        </div>
                        <h4 className='m-0 fs-14 py-2'>Profile</h4>
                    </Link></RippleButton>
              
                    <Link to={"/login"} className=' position-absolute w-100 bottom-0 border-50 mb-5 border-top border-2  d-flex gap-4 font fs-5 align-items-center  px-4 py-3 fs-5ursor-pointer  rounded-0 '>
                        <div className='fs-5'>
                            <span><MdLogout /></span>
                        </div>
                        <h4 className='m-0 fs-14'>Logout</h4>
                    </Link>

                </section>
            </div>
            <Outlet />
        </div>

    )
}
