import React from 'react'
import { FaUser } from 'react-icons/fa6'

export const AdminNavbar:React.FC<{currentPage: string}> = ({currentPage}) => {
  return (
    <div className='w-100 bg-dark d-flex justify-content-between px-4 py-3 align-items-center'>
        <h4 className='text-white fs-5'>{currentPage}</h4>
        <div>
            <div className='text-white bg-info p-2 rounded'>
                <FaUser/>
            </div>
        </div>
    </div>
  )
}
