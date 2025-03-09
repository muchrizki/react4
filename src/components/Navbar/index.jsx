// import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate('/')

  const handleLogout =() => {
    //hit api logout to make expired auth
    localStorage.clear()
    setTimeout(() => navigate('/login'), 2000)
  }

  const token = localStorage.getItem('accessToken')

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: '50px', cursor: 'pointer' }}>

        <Link to="/">Home</Link>
        {!token && <Link to="/login">Login</Link>}
        {token && <Link onClick={handleLogout}>Logout</Link>}
        {token && <Link to="/profile">Profile</Link>}

    </div>
  )
}

export default Navbar