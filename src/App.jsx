// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import MenuDetails from "./pages/MenuDetails"
import Register from "./pages/Register"
import ProtectedRoute from "./routes/ProtectedRoute"
import Profile from "./pages/Profile"


function App() {

  return (
    <>
     <BrowserRouter>

      <Routes>

        <Route path="/" element=
        { 
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>

        <Route path="/login" element={<Login/>} />
        <Route path="/menu/:id" element={<MenuDetails/>} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }/>

      </Routes>

     </BrowserRouter>

    
    </>
  )
}

export default App

// lifecycle method 
// 1. mounting => ketika aplikasi pertama kali dibuka
// 2. update => ketika sesuatu berubah maka aplikasi mentrigger
// 3. unmount => ketika aplikasi ditutup/close