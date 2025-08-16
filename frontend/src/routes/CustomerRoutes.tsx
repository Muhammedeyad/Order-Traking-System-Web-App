import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CustomerNavbar } from '../components/Customer/CustomerNavbar'
import { UserDashboard } from '../Screens/Customer/UserDashboard/UserDashboard'
import { MyOrders } from '../Screens/Customer/MyOrders/MyOrders'
import { ProductDetail } from '../Screens/Customer/ProductDetailPage/ProductDetail'
import { MyProfile } from '../Screens/Customer/MyProfile/MyProfile'
import { OrderDetail } from '../Screens/Customer/OrderDetail/OrderDetail'
import { Cart } from '../Screens/Customer/Cart/Cart'
import { AddressPage } from '../Screens/Customer/AddressPage/AddressPage'
import { AddAddressPage } from '../Screens/Customer/AddAddressPage/AddAddressPage'

export const CustomerRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<CustomerNavbar />}>
        <Route path='/' element={<UserDashboard/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/productDetail/:pid' element={<ProductDetail/>}/>
        <Route path='/profile' element={<MyProfile/>}/>
        <Route path='/orderDetail/:oid' element={<OrderDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/address' element={<AddressPage/>}/> 
        <Route path='/addaddress' element={<AddAddressPage/>}/> 
      </Route>
    </Routes>
  )
}
