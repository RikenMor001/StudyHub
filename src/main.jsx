// When using components from react-router-dom, in the main.jsx file the App tag has to be wrapped inside a <BrowserRoter><BrowserRoter/>

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
