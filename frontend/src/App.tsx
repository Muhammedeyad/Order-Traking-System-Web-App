
// import './App.css'
import { useState } from 'react'
import { AgentRoutes } from './routes/AgentRoutes'
import { CustomerRoutes } from './routes/CustomerRoutes'
import { AdminRoutes } from './routes/AdminRoutes'


function App() {

  const [userType, setUserType] = useState<number>(0)

  return (
    <>
      <div className='bg-white h-100 w-100  '>
        <CustomerRoutes/>
        <AgentRoutes/>
        <AdminRoutes/>  
    
      </div>
    </>
  )
}

export default App
