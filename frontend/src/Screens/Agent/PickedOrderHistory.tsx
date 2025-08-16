import React from 'react'
import { Navbar } from '../../components/Agent/Navbar'
import { CoreUiTabs } from '../../components/CoreUiComponents/CoreUiTabs'

export const PickedOrderHistory: React.FC = () => {
    return (
        <div className='w-100' style={{ marginLeft: '16%' }} >
            <Navbar />
            <div className='mx-4 my-4'>
                <h4 className='text-info fs-5 text-uppercase fw-bold'>Orders History</h4>

                <div className='shadow-lg mt-3 px-3 py-3'>
                    <CoreUiTabs />
                </div>

            </div>
        </div>)
}
