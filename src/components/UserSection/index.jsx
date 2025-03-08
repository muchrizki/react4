import UserCard from "./UserCard"

export default function UserSection (props) {

    const {  users } = props

    return (
        <div className="user">
            {users.map(user => <UserCard key={user.id} user = {user}  />)}           
        </div>
    )
}