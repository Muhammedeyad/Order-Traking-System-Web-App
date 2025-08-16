import React from 'react'
import RippleButton from './ButtonComponent'

export const LoginFormControl: React.FC = () => {
	return (
		<div className='w-50 px-4  py-5 d-flex flex-column '>
			<h1 className='fs-2 py-4 text-info '>OTS SIGN IN</h1>
			<div className='d-flex flex-column gap-3'>
				<div className='d-flex flex-column gap-1'>
					<label htmlFor="text-secondary fs-14">Enter Your Username</label>
					<input type="text" className='px-2 py-2 border-2 border-info' placeholder='charlie@gmail.com' />
				</div>
				<div className='d-flex flex-column gap-1'>
					<label htmlFor="text-secondary fs-14">Enter Your Password</label>
					<input type="text" className='px-2 py-2 border-2 border-info' placeholder='charlie1234@gmail.com' />
				</div>
			</div>
			<RippleButton className='bg-info text-white rounded-0 text-uppercase mt-5 py-2'>Sign IN</RippleButton>
		</div>
	)
}
