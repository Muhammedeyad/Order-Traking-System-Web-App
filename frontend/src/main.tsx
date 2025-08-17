import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import App from './App';
import './index.css'
// import './index.css'; // or whatever your Tailwind CSS file is
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './context/UserContext/UserContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';


const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <ToastContainer/>
        </QueryClientProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
)
