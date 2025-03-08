// import React from 'react'

import { useState } from "react"
import Navbar from "../../components/Navbar"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"



function Login() {
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("") 
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
    const handleSubmit = (e) => {
    
    setLoading(true)
      // setError("")
      // setLoginMessage("")

    const payload = {
      username: username, 
      password: password,
      expiresInMins: 30, //optional, default to 60
    }

    // axios.post('https://api.mudoapi.site/login', payload)
    // .then(res => console.log(res))
    // .catch(err => console.log(err.response))    

    axios.post('https://dummyjson.com/auth/login', payload)
    .then(res => {
      // console.log(loginMessage)
      console.log(res.data.accessToken)
      const token = res.data.accessToken
      setError("Login Berhasil")
      console.log(error.length)

      localStorage.setItem("accessToken", token)

      setTimeout(()=> {
        navigate("/")
      }, 3000)
    }) 
    .catch(err => {
      setError(err.response.data.message)
      console.log(err.response.data.message) 
    })
    .finally(() => setLoading(false)) 
  }

  
  return (

    <div>
        <Navbar />

        
        <div  style={{  display:'flex', flexDirection: 'column', gap: '20px', width: 'fit-content' }}>

          <div className="username">
            <label htmlFor="">Username</label>
            <input onChange={(e) => setUsername(e.target.value) } value={username} type="text" style={{ marginLeft: '10px' }} placeholder="username" required/>
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <input onChange={(e) => setPassword(e.target.value) } value={password} type="password" style={{ marginLeft: '10px' }} placeholder="password" required/>
          </div>

        {error && <p>{error}</p> }

          <button style={{ cursor: 'pointer' }} type="submit" disabled={loading} onClick={handleSubmit}>{loading ? "Loading..." : "Submit"}</button>
        </div>
        <br />
        <Link to="/register" style={{ marginTop: '40px' }}>Register</Link>
    
    </div>
  )
}

export default Login