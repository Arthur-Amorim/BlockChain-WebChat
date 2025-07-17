import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navigator from './component/Navigator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigator />
    <App />
  </StrictMode>,
)
