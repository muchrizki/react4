// import React from 'react'
import { useEffect, useState } from "react"
// import Sidebar from "./components/sidebar"
import axios from "axios"
import UserSection from "../../components/UserSection"
import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"
import useUser from "../../hooks/useUser"

function Home() {

    // const [sidebar, setSidebar] = useState(false)
  
    // const menuNav = ["Home", "About", "Contact"]
    // const handleNav = () => setSidebar(!sidebar)
  
    const [menu, setMenu] = useState([])
    const [search, setSearch] = useState("")
    // const [users, setUsers] = useState([])
   
    const {users, getUsers} = useUser()
    
    const [pagination, setPagination] = useState({
      perPage : 2,
      page: 1,
      // currentPage: null,
      previousPage: null,
      nextPage: null,
      total: null,
    })

    const getMenu = () => {
      
      axios.get(`https://api.mudoapi.site/menus?name=${search}&perPage=${pagination.perPage}&page=${pagination.page}`)
      .then(res => {
        // console.log(res)
        setMenu(res.data.data.Data) 
        setPagination({
          perPage : res.data.data.perPage,
          page: res.data.data.currentPage,
          // currentPage: res.data.data.currentPage,
          previousPage: res.data.data.previousPage,
          nextPage: res.data.data.nextPage,
          total: res.data.data.total
        })
      })
      .catch(err => console.log(err))
  
    }

    // console.log(pagination)
  
    // const getUsers = () => {
    //  axios.get("https://reqres.in/api/users?page=2")
    //  .then(res => setUsers(res.data.data))
    //  .catch(err => err)
    // }
    //useEffect adalah lifecycle untuk memanggil/menjalankan function ketika pertama kali di render
    useEffect(() => {getMenu(); getUsers()}, [])
    
    useEffect(() => {
      getMenu()
    }, [search, pagination.page])
    // console.log(menu)
    
    const handleNext = () => {
        setPagination((prevState) => ({...prevState, page: prevState.page + 1}))
        console.log(pagination)
    }

    const handlePrev = () => {
      setPagination((prevState) => ({...prevState, page: prevState.page - 1}))
        console.log(pagination)
    }

    // console.log(pagination)
    return (
      <>
        {/* {!sidebar && <p onClick={handleNav} style={{ cursor: 'pointer' }}>|||</p>}
        {sidebar &&  <Sidebar menuNav = {menuNav} handleNav = {handleNav}/>} */}
        <Navbar />
        {/* <UserSection users = {users} /> */}
        
        <input type="text" style={{  width: '200px' }}  onChange={(e) => setSearch(e.target.value)} />
        {/* <button>Search</button> */}
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

        <div className="btn" style={{  display:'flex', alignItems: 'center', gap: '20px' }}>
          <button disabled={!pagination.previousPage} onClick={handlePrev}>Previous</button>
          
          <div className="page" style={{ marginTop: '0px' }}>
            <input className="btn-page" type="button" style={{  marginRight: '5px' }} value={1}/>
            <input className="btn-page" type="button" style={{  marginRight: '5px' }} value={2}/>
            <input className="btn-page" type="button" style={{  marginRight: '5px' }} value={3}/>
          </div>
          
          <button disabled={!pagination.nextPage} onClick={handleNext}>Next</button>
        </div>

        {users.map(user => <p key={user.id}>{user.email}</p>)}
        
      </>
    )
  }

export default Home