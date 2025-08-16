import React from 'react'
import RippleButton from '../../../components/ButtonComponent'

export const AddAddressPage: React.FC = () => {
    return (
        <div className='w-100 d-flex justify-content-center row'>
            <div className='shadow px-4 col-sm-6 py-4 mt-4'>
                <h4>ADD A NEW ADDRESS</h4>
                <RippleButton className='my-3 px-3 py-1 bg-info border-info text-white rounded-0'>Get Location</RippleButton>
                <div className='d-grid w-100' >
                    <div className='row mx-sm-1 mx-2 gap-md-0 gap-2'>
                        <div className='col-sm-6 col-12 '>
                            <label htmlFor="">Pincode</label>
                            <input type="text" className='w-100 px-2 py-1' />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label htmlFor="">City</label>
                            <input type="text" className='w-100 px-2 py-1' />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label htmlFor="">State</label>
                            <input type="text" className='w-100 px-2 py-1' />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label htmlFor="">Country</label>
                            <input type="text" className='w-100 px-2 py-1' />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label htmlFor="">Pincode</label>
                            <input type="text" className='w-100 px-2 py-1' />
                        </div>
                        <div className='col-sm-6 col-12'>
                            <label htmlFor="">Address</label>
                            <input type="text" className='w-100 px-2 py-1 border-1' />
                        </div>

                    </div>
                </div>
                <div className='w-100 d-flex justify-content-between  mt-5'>
                    <RippleButton className='px-3 py-2 bg-info text-white border-success rounded-0'>Save Address</RippleButton>
                    <RippleButton className='px-3 py-2 bg-info text-white border-warning rounded-0'>Cancel</RippleButton>
                </div>
            </div>
        </div>
    )
}
