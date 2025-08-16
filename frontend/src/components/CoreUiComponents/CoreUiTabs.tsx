import React from 'react'
import { CTab, CTabContent, CTabList, CTabPanel, CTabs } from '@coreui/react'
import { HistoryTables } from '../Agent/OrdersHistory/HistoryTables'
import RippleButton from '../ButtonComponent'

export const CoreUiTabs: React.FC = () => {
    return (
        <CTabs className='' defaultActiveItemKey={2}>
            <div className='d-flex justify-content-between w-100  '>
                <CTabList variant="underline" className='text-uppercase d-flex gap-4'>
                    <RippleButton><CTab className='text-uppercase fw-bold fs-14' aria-controls="home-tab-pane" itemKey={1}>All</CTab></RippleButton>
                    <RippleButton><CTab className='text-uppercase fw-bold fs-14' aria-controls="profile-tab-pane" itemKey={2}>Delivered</CTab></RippleButton>
                    <RippleButton><CTab className='text-uppercase fw-bold fs-14' aria-controls="profile-tab-pane" itemKey={3}>Picked</CTab></RippleButton>

                </CTabList>
                <input className='px-3 py-2 fs-14 w-25  ' type="text" placeholder='Search Using OrderId' />
            </div>
            <CTabContent className='mt-2'>
                <CTabPanel className="p-3" aria-labelledby="home-tab-pane" itemKey={1}>
                    <HistoryTables />
                </CTabPanel>
                <CTabPanel className="p-3" aria-labelledby="profile-tab-pane" itemKey={2}>
                    <HistoryTables />
                </CTabPanel>
                <CTabPanel className="p-3" aria-labelledby="profile-tab-pane" itemKey={3}>
                    <HistoryTables />
                </CTabPanel>

            </CTabContent>
        </CTabs>
    )
}
