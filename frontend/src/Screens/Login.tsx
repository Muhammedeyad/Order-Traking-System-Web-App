import React from 'react'
import { LoginFormControl } from '../components/LoginFormControl'
import LoginImage from './../../public/loginimg.jpg'

export const Login: React.FC = () => {
    return (
        <main className="d-flex bg-lightgray w-100 vh-100 align-items-center justify-content-center">
            <section className='w-75 bg-lightgray shadow h-75 d-flex rounded'>
                <LoginFormControl />
                <div className='w-50 h-100'>
                    <img src={LoginImage} className='w-100 h-100' />
                </div>
            </section>
        </main>
    )
}
