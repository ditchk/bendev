import ReactDOM from 'react-dom/client'
import { BrowserRouter }  from 'react-router-dom'

import App from './App.tsx'
import './global.css'
import { QueryProvider } from './lib/Queries/QueryProvider.tsx'
import React from 'react'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryProvider>
                <App />
            </QueryProvider>
        </BrowserRouter>
    </React.StrictMode>
    
  
)
