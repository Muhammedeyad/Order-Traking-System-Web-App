import React from 'react'
import { Navbar } from '../../components/Agent/Navbar'
import { AssignedOrdersTable } from '../../components/Agent/AssignOrdersComponent/AssignedOrdersTable'

export const AssignOrders: React.FC = () => {
    return (
        <div className='w-100' style={{ marginLeft: '16%' }}>
            <Navbar />

            <div className='mx-4 my-4'>
                <h4 className='text-info fs-5 text-uppercase fw-bold'>Assign By Admin </h4>

                <div className='shadow-lg mt-3 px-3 py-3'>
                  <AssignedOrdersTable/>
                </div>
            </div>
        </div>
    )
}
