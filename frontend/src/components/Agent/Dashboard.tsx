import React from 'react'
import { FaBell } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { BsClipboard2Data } from "react-icons/bs";
import { } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'


export const Dashboard: React.FC = () => {
	return (
		<main className='w-100 ' style={{ marginLeft: '19%' }} >
			<section className='w-100 py-3 px-3 bg-lightgray py-2 d-flex justify-content-between align-items-center  top-0'>
				<div className='w-25 shadow border-1 border-primary d-flex justify-content-between align-items-center px-2 bg-lightgray rounded-md'>
					<input className='bg-transparent  outline-none border-0 px-3 py-1 w-100 rounded fs-14 py-2' type="text" placeholder='Search Sidebar Tabs' />
					<FaSearch />
				</div>
				<div className='d-flex justify-content-center align-items-center gap-5 '>
					<div className='d-flex gap-2 align-items-center'>
						<span className='m-0 '><FaBell /></span>
						<h1 className='m-0 fs-16'>Notification</h1>
					</div>
					<div className='d-flex gap-2 align-items-center'>
						<div className='bg-primary p-2 text-white rounded-circle'>
							<p className='m-0 fs-16'>AT</p>
						</div>
						<h1 className='fs-14 m-0'>Harry potter</h1>
					</div>

				</div>
			</section>

			{/* actual content */}
			<section className=' d-grid cols-12 py-4 px-4 '>
				<div className='row gap-3'>
					<div className='bg-lightgray col-3  d-flex justify-content-between align-items-center px-4 py-4'>
						<div className='fs-1 text-primary'>
							<BsClipboard2Data />
						</div>
						<div>
							<h1 className='fs-16 text-secondary m-0 pb-1 '>Total Delivery</h1>
							<h4 className='fs-5'>$400</h4>
						</div>
					</div>
					<div className='bg-lightgray col-3  d-flex justify-content-between align-items-center px-4 py-4'>
						<div className='fs-1 text-primary'>
							<BsClipboard2Data />
						</div>
						<div>
							<h1 className='fs-16 text-secondary m-0 pb-1 '>Total Delivery</h1>
							<h4 className='fs-5'>$400</h4>
						</div>
					</div>
					<div className='bg-lightgray col-3  d-flex justify-content-between align-items-center px-4 py-4'>
						<div className='fs-1 text-primary'>
							<BsClipboard2Data />
						</div>
						<div>
							<h1 className='fs-16 text-secondary m-0 pb-1 '>Total Delivery</h1>
							<h4 className='fs-5'>$400</h4>
						</div>
					</div>


				</div>
			</section>
			{/* ------------------revenue chart -------------	 */}
			<section className='h-75 w-75 px-3 mt-3'>
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
