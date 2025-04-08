import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ServicesProvider } from './context/ServicesContext.tsx'
import { service2 } from './context/services/service2.ts'
import { service1 } from './context/services/service1.ts'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ServicesProvider services={{service1, service2}}>
            <App />
        </ServicesProvider>
    </StrictMode>,
)
