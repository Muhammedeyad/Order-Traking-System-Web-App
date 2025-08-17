import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminSidebar } from '../components/Admin/AdminSidebar/AdminSidebar'
import { AdminOrderPage } from '../Screens/Admin/AdminOrderPage/AdminOrderPage'
import { AdminDashboard } from '../Screens/Admin/AdminDashboard/AdminDashboard'
import { AdminAddAgent } from '../Screens/Admin/AdminAddAgent/AdminAddAgent'
import { AdminProfie } from '../Screens/Admin/AdminProfile/AdminProfie'
import { AdminProductsPage } from '../Screens/Admin/AdminProductsPage/AdminProductsPage'
import { AdminCatagoryPage } from '../Screens/Admin/AdminCatagoryPage/AdminCatagoryPage'

export const AdminRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<AdminSidebar />}>    
                <Route path='dashboard' element={<AdminDashboard/>}/>
                <Route path='orderPage' element={<AdminOrderPage/>}/>
                <Route path='addAgent' element={<AdminAddAgent/>}/>
                <Route path='products' element={<AdminProductsPage/>}/>
                <Route path='catagories' element={<AdminCatagoryPage/>}/>
                <Route path='profile' element={<AdminProfie/>}/>
                
                
            </Route>

        </Routes>
    )
}
