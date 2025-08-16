import React from 'react'
import {
  CBadge,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
  CNavItem,
  CNavLink,
  CNavTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cilAccountLogout,
  cilCloudDownload,
  cilLayers,
  cilSpeedometer,
} from '@coreui/icons'
import { NavLink, Outlet } from 'react-router-dom'
import { FaUser } from 'react-icons/fa6'

export const AdminSidebar: React.FC = () => {
  return (
    <div className="d-flex relative">
      <CSidebar className="border-end vh-100 sidebar-dark bg-dark">
        <CSidebarHeader className="border-bottom">
          <CSidebarBrand className="fs-5 text-white">E Cura&apos;s</CSidebarBrand>
        </CSidebarHeader>

        <CSidebarNav>
          <CNavTitle className='d-flex align-items-center gap-2'>Admin <FaUser/></CNavTitle>

          <CNavItem>
            <CNavLink as={NavLink} to="/admin/dashboard">
              <CIcon className="me-2" icon={cilSpeedometer} /> Dashboard
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink as={NavLink} to="/admin/orderPage">
              <CIcon className="me-2" icon={cilSpeedometer} /> Customer Orders
              <CBadge color="primary" className="ms-auto">
                NEW
              </CBadge>
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink as={NavLink} to="/admin/addAgent">
              <CIcon className="me-2" icon={cilCloudDownload} /> Delivery Agents
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink as={NavLink} to="/admin/products">
              <CIcon className="me-2" icon={cilCloudDownload} /> Products
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink as={NavLink} to="/admin/catagories">
              <CIcon className="me-2" icon={cilCloudDownload} /> Catagories
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink as={NavLink} to="/admin/profile">
              <CIcon className="me-2" icon={cilLayers} /> Profile
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink as={NavLink} to="/logout">
              <CIcon className="me-2" icon={cilAccountLogout} /> Logout
            </CNavLink>
          </CNavItem>
        </CSidebarNav>
      </CSidebar>

      {/*  nested component--------------------- */}
      <Outlet />
    </div>
  )
}
