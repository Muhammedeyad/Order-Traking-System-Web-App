import { Route, Routes } from 'react-router-dom'
import './App.css'
import AgentDashboard from './Screens/Agent/AgentDashboard'
import { Login } from './Screens/Login'

function App() {


  return (
    <>
      <div className='bg-white h-100 w-100  '>
        <Routes>
          <Route path='agent/dashboard' element={<AgentDashboard />} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
