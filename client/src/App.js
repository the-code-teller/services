import React from 'react'

// Manually Imported
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'


const App = () => {
  
  return (
    <>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

      </Routes>
       
    </>
  )
}

export default App
