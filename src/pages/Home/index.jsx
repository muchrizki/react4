// import React from 'react'
import { useEffect, useState } from "react"
// import Sidebar from "./components/sidebar"
import axios from "axios"
import UserSection from "../../components/UserSection"
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"

function Home() {

    // const [sidebar, setSidebar] = useState(false)
  
    // const menuNav = ["Home", "About", "Contact"]
    // const handleNav = () => setSidebar(!sidebar)
  
    const [menu, setMenu] = useState([])
    const [users, setUsers] = useState([])
    const getMenu = () => {
  
      axios.get("https://api.mudoapi.site/menus")
      .then(res => setMenu(res.data.data.Data))
      .catch(err => console.log(err))
  
    }
  
    const getUsers = () => {
     axios.get("https://reqres.in/api/users?page=2")
     .then(res => setUsers(res.data.data))
     .catch(err => err)
    }
    //useEffect adalah lifecycle untuk memanggil/menjalankan function ketika pertama kali di render
    useEffect(() => {getMenu(); getUsers()}, [])
    // console.log(menu)
  
    return (
      <>
        {/* {!sidebar && <p onClick={handleNav} style={{ cursor: 'pointer' }}>|||</p>}
        {sidebar &&  <Sidebar menuNav = {menuNav} handleNav = {handleNav}/>} */}
        <Navbar />
        <UserSection users = {users} />
        
        {
          menu.map(item => (
            <div key={item.id} style={{ marginBottom: "40px" }}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <h4>${item.price}</h4>
              <button><Link to={`menu/${item.id}`}>Details</Link></button>
            </div>
          ))
        }
      
      </>
    )
  }

export default Home