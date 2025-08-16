import { Route, Routes } from 'react-router-dom'
import { Login } from '../Screens/Login'
import { Sidebar } from '../components/Agent/Sidebar'
import AgentDashboard from '../Screens/Agent/AgentDashboard'
import { AssignOrders } from '../Screens/Agent/AssignOrders'
import { PickedOrderHistory } from '../Screens/Agent/PickedOrderHistory'
import { ProfilePage } from '../Screens/Agent/ProfilePage'
import { PendingOrders } from '../Screens/Agent/PendingOrders'

export const AgentRoutes = () => {
  return (
    <Routes>
          <Route path='/login' element={<Login/>}/>
            <Route path='/agent/*' element={<Sidebar/>}>
                <Route path='dashboard' element={<AgentDashboard/>}/>
                <Route path='assignorders' element={<AssignOrders/>}/>
                <Route path='pickedordershistory' element={<PickedOrderHistory/>}/>
                <Route path='profile' element={<ProfilePage/>}/>
                <Route path='pendingorders' element={<PendingOrders/>}/>
            </Route>
        </Routes>
  )
}
