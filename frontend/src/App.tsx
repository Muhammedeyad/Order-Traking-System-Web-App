
// import './App.css'
import { AgentRoutes } from './routes/AgentRoutes'
import { CustomerRoutes } from './routes/CustomerRoutes'
import { AdminRoutes } from './routes/AdminRoutes'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './Screens/Login'
import { NoPageFound } from './Screens/NoPageFound'
import { UseUserContext } from './context/UserContext/UserContext'
import { ProtectedRoute } from './routes/ProtectedRoute'
import { PublicRoute } from './routes/PublicRoute'


function App() {

  const {user}= UseUserContext()
    console.log(user);
  
  
  return (
    <>
    <Routes>
   
      <Route path='/admin/*' element={<ProtectedRoute allowedRoutes={[1]}> <AdminRoutes/> </ProtectedRoute>}/> {/* Admin Routes */}
      <Route path='/agent/*' element={<ProtectedRoute allowedRoutes={[5]}><AgentRoutes/></ProtectedRoute>}/> {/* Delivery Agent Routes */}
      <Route path='/*' element={<ProtectedRoute allowedRoutes={[3]}> <CustomerRoutes/></ProtectedRoute>}/> {/* Customer Routes */}
      <Route path='/login' element={<PublicRoute><Login/></PublicRoute>}/> {/* Common Login Routes */}
      <Route path='*' element={<NoPageFound/>}/> {/* Common  Not Found Routes */}
    </Routes>
    </>
  )
}

export default App
