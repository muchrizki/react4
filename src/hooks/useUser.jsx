import axios from "axios";
import { useState } from "react";

export default function useUser () {
    const [users, setUsers] = useState([])


    const getUsers = async () => {
        try {
            const res = await axios.get("https://reqres.in/api/users?page=1")
            setUsers(res.data.data)
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }


    return { users, getUsers}
}