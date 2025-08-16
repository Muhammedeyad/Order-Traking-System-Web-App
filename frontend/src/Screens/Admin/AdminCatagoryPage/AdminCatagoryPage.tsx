import React, { useState } from 'react'
import RippleButton from '../../../components/ButtonComponent'
import { AdminNavbar } from '../../../components/Admin/AdminNavbar/AdminNavbar'
import { AdminCatagoryTable } from '../../../components/Admin/AdminCatagoryTable/AdminCatagoryTable'


export const AdminCatagoryPage: React.FC = () => {
  const [isAddPopupOpen, setIsAddPopupOpen] = useState<boolean>(false)

  return (
    <div className='w-100'>
      <AdminNavbar currentPage={'Catagory Page'} />
      <div className='px-4 mt-4'>
        <div className='w-100 d-flex justify-content-between '>

          <RippleButton onClick={()=>setIsAddPopupOpen(!isAddPopupOpen)} className='bg-info border-info border-2 px-3 py-1 rouned-0 text-white rounded-0'>Add New Catagory</RippleButton>
        </div>
        <AdminCatagoryTable/>
      </div>

      {/* popup is being progress */}
      {isAddPopupOpen &&
        <div className='position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50'>
          <div className='bg-black w-50 d-flex flex-column px-4 py-4 rounded'>
            <h4 className='text-white'>Add New Catagory</h4>

            <div className='d-flex flex-column gap-2 mt-4 m-3'>
              <div>
                <label className='text-white'> Agent Name</label>
                <input type="text" className='w-100 px-2 py-2 rounded-0' placeholder='Enter  Agent Name' />
              </div>
              <div>
                <label className='text-white'> Email</label>
                <input type="text" className='w-100 px-2 py-2 rounded-0' placeholder='Enter Email ' />
              </div>
              <div>
                <label className='text-white'>Password</label>
                <input type="text" className='w-100 px-2 py-2 rounded-0' placeholder='Enter Password ' />
              </div>
              <div>
                <label className='text-white'>PhoneNumber</label>
                <input type="text" className='w-100 px-2 py-2 rounded-0' placeholder='Enter PhoneNumber ' />
              </div>
              <div>
                <label className='text-white'>Select UserType</label>
                <select name="" id="" className='w-100 px-3 py-2'>
                  <option value="">Select UserType</option>
                  <option value="">Customer</option>
                  <option value="">agent</option>
                </select>
              </div>

            </div>
            <div className='w-100 d-flex justify-content-between mx-3'>
              <RippleButton className='mt-4 bg-info px-3 py-2 border-black rounded-0 mb-3'>
                Add Product
              </RippleButton>
              <RippleButton onClick={()=>setIsAddPopupOpen(!isAddPopupOpen)} className='mt-4 bg-info px-3 py-2 border-black rounded-0 mb-3'>
                Cancel
              </RippleButton>
            </div>
          </div>
        </div>}

    </div>
  )
}
