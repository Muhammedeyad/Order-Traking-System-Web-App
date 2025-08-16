import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import App from './App';
import './index.css'
// import './index.css'; // or whatever your Tailwind CSS file is
import { BrowserRouter } from 'react-router-dom';



// import bootstrap from 'bootstrap'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
