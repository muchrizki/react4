import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Register () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(null)

    const navigate = useNavigate('/')

    const fetchRegister = () => {
        setLoading(true)
        const payload = {username, password}

        axios.post('https://reqres.in/api/register/', payload )
        .then(res => {
            // console.log(res)
            setError('Register Success')
        })
        .catch(error => {
            // console.log(error)
            setError(error.response.data.error)
        })
        .finally(() => setLoading(false))
    }

    const handleRegister = () => fetchRegister()
    setTimeout(() => error == "Register Success" ? navigate('/login') : null, 1500)

    return (
        <>
            <h3>Register Form</h3>
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

                <button style={{ cursor: 'pointer' }} type="submit" disabled={loading} onClick={handleRegister}>{loading ? "Loading..." : "Submit"}</button>
            
            </div>
        </>
    )
}