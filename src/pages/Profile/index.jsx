import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import useUser from "../../hooks/useUser"


export default function Profile () {

    const [ profile, setProfile] = useState({})
    const { users, getUsers } = useUser()

    const getProfile =  async() => {

        const token = localStorage.getItem('accessToken')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.get(`https://dummyjson.com/auth/me`, config)
            // console.log(response) 
            setProfile(response.data)
        } catch(error) {
            console.log("err", error.response)
        }
    }


    useEffect(() => {
        getProfile()
        getUsers()
    }, [])

    // console.log(profile)
    return(
        <>
            <Navbar />
            <h3>{profile.username}</h3>
            <img src={profile.image} alt="" />
            <p>{profile.gender}</p>
            <br />

            {users.map((user) => <p key={user.id}>{user.email}</p>)}
        </>
    )
}