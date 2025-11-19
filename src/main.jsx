import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import router from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>

  </StrictMode>,
)
