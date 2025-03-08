// import { Link } from "react-router-dom"

export default function UserCard (props) {
    
    const {user} = props

    return (
        <>
        <h3 key={user.id}>Firstname: {user.first_name} Lastname: {user.last_name}</h3>
        </>
    )
}