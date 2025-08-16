import React from 'react'
import {
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow
  } from '@coreui/react'
import RippleButton from '../../ButtonComponent'



export const AdminOrdersTable :React.FC = () => {
  return (
    <div className='mt-3'>
    <CTable responsive="md" className="text-center align-middle">
      <CTableHead color="dark">
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">Class</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
          <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell className="p-2" scope="row">
            1
          </CTableHeaderCell>
          <CTableDataCell>Mark</CTableDataCell>
          <CTableDataCell>Otto</CTableDataCell>
          <CTableDataCell>@mdo</CTableDataCell>
          <CTableDataCell>@mdo</CTableDataCell>
          <CTableDataCell>@mdo</CTableDataCell>
          <CTableDataCell>@mdo</CTableDataCell>
          <CTableDataCell className="p-0 py-1">
            <div className="d-flex justify-content-center gap-3">
              <RippleButton className="bg-success text-white px-2 py-2 d-flex gap-1 justify-content-center align-items-center border-black cursor-pointer rounded-0">Approve</RippleButton>
              <RippleButton className="bg-black text-white px-2 py-2 d-flex gap-1 justify-content-center align-items-center border-black cursor-pointer rounded-0">Decline</RippleButton>
            </div>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  </div>
  )
}
