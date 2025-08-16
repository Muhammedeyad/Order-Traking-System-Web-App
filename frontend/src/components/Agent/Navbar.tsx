import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FaBell } from 'react-icons/fa6'

export const Navbar:React.FC = () => {
    return (
        <section className='w-100 py-3 px-3 bg-lightgray py-2 d-flex justify-content-between align-items-center  top-0'>
            <div className='d-flex align-items-center border-1 border-b-1 text-black px-3 py-1 w-25'>
                <input placeholder='Search Using Tabs' className='bg-transparent w-100 fs-14   outline-none border-0 px-3 py-1 w-100 rounded py-2' type="text"  />
                <FaSearch/>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-5 '>
                <div className='d-flex gap-2 align-items-center'>
                    <span className='m-0 '><FaBell/></span>
                    <h1 className='m-0 fs-16'>Notification</h1>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <div className='bg-info p-2 text-white rounded-circle'>
                        <p className='m-0 fs-16'>AT</p>
                    </div>
                    <h1 className='fs-14 m-0'>Harry potter</h1>
                </div>

            </div>
        </section>
    )
}
