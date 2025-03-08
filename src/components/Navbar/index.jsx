// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate('/')

  const handleLogout =() => {
    localStorage.removeItem('accessToken')
    setTimeout(() => navigate('/login'), 2000)
  }


  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: '50px', cursor: 'pointer' }}>

        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link onClick={handleLogout}>Logout</Link>

    </div>
  )
}

export default Navbar