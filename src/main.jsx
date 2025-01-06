import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Nb from './Nb'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nb/>
  </StrictMode>,
)