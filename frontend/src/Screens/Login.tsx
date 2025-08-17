import React from 'react'
import { LoginFormControl } from '../components/LoginFormControl'
import LoginImage from './../../public/loginimg.jpg'
import { UseUserContext } from '../context/UserContext/UserContext'


export const Login: React.FC = () => {
    const authUser = UseUserContext()

    return (
        <main className="d-flex bg-lightgray w-100 row vh-100 align-items-center justify-content-center">
            <section className='col-12 col-sm-8 bg-lightgray shadow-lg rounded-4  d-flex flex-column flex-sm-row rounded '>
                <LoginFormControl authUser={authUser}/>
                <div className='col-md-6  overflow-hidden d-none d-sm-block'>
                    <img src={LoginImage} className='w-100 h-100' />
                </div>
            </section>
        </main>
    )
}
