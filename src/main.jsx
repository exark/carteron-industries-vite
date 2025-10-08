import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import './assets/i18n'
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        <SpeedInsights />
    </>
)
