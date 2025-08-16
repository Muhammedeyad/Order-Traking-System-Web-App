import React from 'react'
import { AdminNavbar } from '../../../components/Admin/AdminNavbar/AdminNavbar'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'
import RippleButton from '../../../components/ButtonComponent'
import { AdminOrdersTable } from '../../../components/Admin/AdminOrderPage/AdminOrdersTable'

export const AdminOrderPage: React.FC = () => {
	const currentPage = "Manage Orders"
	return (
		<div className='w-100 vh-100  d-flex flex-column'>
			<AdminNavbar currentPage={currentPage} />

			<CTabs className='px-3 mt-2 ' defaultActiveItemKey={2}>
				<div className='d-flex justify-content-between w-100 flex-lg-row  '>
					<CTabList variant="underline" className='text-uppercase d-flex gap-4'>
						<RippleButton><CTab className='text-uppercase fw-bold fs-14' aria-controls="home-tab-pane" itemKey={1}>All</CTab></RippleButton>
						<RippleButton><CTab className='text-uppercase fw-bold fs-14' aria-controls="profile-tab-pane" itemKey={2}>Pending</CTab></RippleButton>
						<RippleButton><CTab className='text-uppercase fw-bold fs-14' aria-controls="profile-tab-pane" itemKey={3}>Shipped</CTab></RippleButton>
						<RippleButton><CTab className='text-uppercase fw-bold fs-14' aria-controls="profile-tab-pane" itemKey={4}>Delivered</CTab></RippleButton>

					</CTabList>
					<div className='w-25'>
						<input className='px-3 py-2 fs-14 w-100 ' type="text" placeholder='Search Using OrderId' />
					</div>	
				</div>
				<CTabContent className='mt-1'>
					<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
						<AdminOrdersTable />
					</CTabPanel>
					<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={2}>
						<AdminOrdersTable />
					</CTabPanel>
					<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={3}>
						<AdminOrdersTable />
					</CTabPanel>
					<CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={4}>
						<AdminOrdersTable />

					</CTabPanel>
				</CTabContent>
			</CTabs>
		</div>

	)
}
