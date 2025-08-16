import React from 'react'
import orderImage from './../../assets/product-4.jpg'

export const OrderedItem: React.FC = () => {
    return (
        <div className='w-100 d-flex justify-content-between '>
            <div className='d-flex gap-4'>
                <div className='w-15'>
                    <img src={orderImage} alt="" className='w-100'/>
                </div>
                <div>
                    <h3 className='fs-5'>MacBook Pro 14</h3>
                    <div>
                        <p className='text-secondary c'>Space Gray 32Gb | 1TB</p>
                    </div>
                </div>
            </div>
            <div>
                <h4>$2599.o00</h4>
                <p>Oty: 1</p>
            </div>
        </div>
    )
}
