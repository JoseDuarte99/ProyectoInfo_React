import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import  App  from './App.tsx'
import { Header } from './App.tsx'

createRoot(document.getElementById('header')!).render(
  <StrictMode>
    <Header /> 
  </StrictMode>,
)

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <App /> 
  </StrictMode>,
)
