import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import './assets/i18n'
import { SpeedInsights } from "@vercel/speed-insights/react"

// Wrapper component to handle SpeedInsights errors gracefully
const SpeedInsightsWrapper = () => {
  try {
    // Only load SpeedInsights in production and on Vercel
    if (import.meta.env.PROD && typeof window !== 'undefined') {
      return <SpeedInsights />
    }
    return null
  } catch (error) {
    console.warn('SpeedInsights failed to load:', error)
    return null
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        <SpeedInsightsWrapper />
    </>
)
