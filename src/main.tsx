import ReactDOM from 'react-dom/client'
import { BrowserRouter }  from 'react-router-dom'

import App from './App.tsx'
import './global.css'
import { QueryProvider } from './lib/Queries/QueryProvider.tsx'
import AuthProvider from './context/Authcontext.tsx'
// import { ToastProvider } from './components/ui/toast.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QueryProvider>
          <AuthProvider>
              <App />
          </AuthProvider>
        </QueryProvider>
    </BrowserRouter>
  
)
