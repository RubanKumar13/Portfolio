import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Component/Home'
import About from './assets/Component/About'
import Contact from './assets/Component/Contact'
import Education from './assets/Component/Education'
import Project from './assets/Component/Project'
import App from './App'

function Nb() {
  return (
    <>
    <BrowserRouter>
    <App/>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/education' element={<Education/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/project' element={<Project/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Nb