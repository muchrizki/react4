import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: '50px', cursor: 'pointer' }}>

        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>

    </div>
  )
}

export default Navbar