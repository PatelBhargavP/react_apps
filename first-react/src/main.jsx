import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

/**
 * Challenge:
 * 
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
