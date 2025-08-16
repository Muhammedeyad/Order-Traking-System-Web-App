import React from 'react'
import { BsClipboard2Data } from "react-icons/bs";
import { } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { Navbar } from './Navbar';


export const Dashboard: React.FC = () => {
	return (
		<main className='w-100 ' style={{ marginLeft: '16%' }} >
			<Navbar/>

			{/* actual content */}
			<section className=' d-grid cols-12 mx-4 py-4 px-4 '>
				<div className='row gap-3'>
					<div className='bg-lightgray col-3  d-flex justify-content-between align-items-center px-4 py-4'>
						<div className='fs-1 text-info'>
							<BsClipboard2Data />
						</div>
						<div>
							<h1 className='fs-14 text-secondary m-0 pb-1 '>Total Delivery</h1>
							<h4 className='fs-16'>$400</h4>
						</div>
					</div>
					<div className='bg-lightgray col-3  d-flex justify-content-between align-items-center px-4 py-4'>
						<div className='fs-1 text-info'>
							<BsClipboard2Data />
						</div>
						<div>
							<h1 className='fs-14 text-secondary m-0 pb-1 '>Total Delivery</h1>
							<h4 className='fs-16'>$400</h4>
						</div>
					</div>
					<div className='bg-lightgray col-3  d-flex justify-content-between align-items-center px-4 py-4'>
						<div className='fs-1 text-info'>
							<BsClipboard2Data />
						</div>
						<div>
							<h1 className='fs-14 text-secondary m-0 pb-1 '>Total Delivery</h1>
							<h4 className='fs-16'>$400</h4>
						</div>
					</div>


				</div>
			</section>
			{/* ------------------revenue chart -------------	 */}
			<section className='h-75 w-75 px-3 mx-4 mt-3'>
				<div className=' bg-lightgray w-75 shadow px-4 py-5 rounded'>
					<h1 className='fs-16 text-capitalize fw-bold text-secondary '>Weekly Earnings Chart</h1>
					<Bar
						data={{
							labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
							datasets: [
								{
									label: "Revenue",
									data: [2000, 5000, 200, 100, 1000, 200]
								},
								{
									label: "Loss",
									data: [2000, 1000, 2500, 2000, 5000, 10000]
								}
							]
						}}></Bar>
				</div>
			</section>
		</main>
	)
}
