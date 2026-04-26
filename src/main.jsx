import React from 'react'
import ReactDOM from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './style.css'
import './assets/i18n'
import { initImageProtection } from './utils/imageProtection'

// Initialize image protection
initImageProtection()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
            <SpeedInsights />
        </HelmetProvider>
    </React.StrictMode>
)
