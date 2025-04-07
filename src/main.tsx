import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ServicesProvider } from './context/ServicesContext.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ServicesProvider>
            <App />
        </ServicesProvider>
    </StrictMode>,
)
