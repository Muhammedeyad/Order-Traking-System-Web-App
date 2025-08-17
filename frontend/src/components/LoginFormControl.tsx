import React, { useState } from 'react'
import RippleButton from './ButtonComponent'
import type { AuthTypes } from '../types/authTypes'
import { UseAuthenticationHook } from '../hooks/UseAuthenticationHook'

export const LoginFormControl: React.FC<AuthTypes> = ({authUser}) => {
	const [user, setUser]= useState({
		name: "",
		email:"",
		password: "",
		phoneNumber: ""
	})

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setUser({...user, [name]: value})
	}
	// handle formDate submit
	const [isSignInPage, setIsSignInPage] = useState<boolean>(true)
	const { mutation } = UseAuthenticationHook()
	const handleAuthSubmit = () => {
		mutation.mutate({data: user, isSignInPage: isSignInPage, setUser:setUser})
	}	
	return (
		<div className=' px-4  py-5 d-flex flex-column col-sm col-12 mx-3 mx-sm-0'>
			<h1 className='fs-4 py-4 text-info '>OTS SIGN {!isSignInPage ? "UP": 'IN'} </h1>
			<div className='d-flex flex-column gap-3'>
				{ !isSignInPage && 
				<div className='d-flex flex-column gap-1'>
					<label htmlFor="text-secondary fs-14"> Username</label>
					<input type="text" className='px-2 py-2 border-2 border-info' placeholder='charlie@gmail.com' name='name' onChange={(e)=>handleChange(e) } value={user.name}/>
				</div>}
				<div className='d-flex flex-column gap-1'>
					<label htmlFor="text-secondary fs-14"> Email</label>
					<input type="text" className='px-2 py-2 border-2 border-info' placeholder='charlie1234@gmail.com' name='email' onChange={(e)=>handleChange(e)} value={user.email}/>
				</div>

				<div className='d-flex flex-column gap-1'>
					<label htmlFor="text-secondary fs-14"> Password</label>
					<input type="text" className='px-2 py-2 border-2 border-info' placeholder='charlie1234@gmail.com' name='password' onChange={(e)=>handleChange(e)} value={user.password} />
				</div>
				{ !isSignInPage && 
				<div className='d-flex flex-column gap-1'>
					<label htmlFor="text-secondary fs-14">Phone Number</label>
					<input type="text" className='px-2 py-2 border-2 border-info' placeholder='charlie1234@gmail.com' name='phoneNumber' onChange={(e)=>handleChange(e) } value={user.phoneNumber}/>
				</div>}
			</div>
			<RippleButton onClick={handleAuthSubmit} className='bg-info text-white rounded-0 fs-16 text-uppercase mt-5 py-2'>{!isSignInPage?  "Sign UP": " Sign IN"}</RippleButton>
			<p className='mt-3'>{!isSignInPage? "Already Have an Account":"Don't have an Account!"} <span onClick={() => setIsSignInPage(!isSignInPage)} className=' cursor-pointer text-primary underline mt-3'>{!isSignInPage? "SignIN": "SIgnUp"}</span></p>
		</div>
	)
}
