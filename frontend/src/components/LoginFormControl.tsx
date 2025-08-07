import React from 'react'

export const LoginFormControl: React.FC = () => {
	return (
		<div className='w-50 px-4  py-5 fs-14 d-flex flex-column justify-content-center'>
			<div className="mb-3">
				<h1 className="form-label fs-14">Email address</h1>
				<input type="email" className="form-control fs-14 py-2" id="exampleFormControlInput1" placeholder="name@example.com" />
			</div>
			<div className="mb-3">
			<h1 className="form-label fs-14">Password</h1>
				<input type="password" className="form-control fs-14 py-2" id="exampleFormControlInput1" placeholder="password" />
			</div>
			<button className='mt-3 px-3 py-2 w-50 border-0 bg-primary  text-white fs-14 btn btn-primary '>Sign In</button>
			<p className='fs-14 mt-2 text-primary'>Already Have an Account! Register</p>
			<div className='mt-4'>
				<button className='btn btn-primary fs-14 w-100 bg-success border-0 text-white px-2 py-2'>Sign in with FaceBook</button>
			</div>

		</div>
	)
}
