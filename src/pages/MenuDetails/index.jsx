// import React from 'react'

import { useParams, Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

function MenuDetails() {
    const { id } = useParams()
    console.log(id)

    const [menu, setMenu] = useState({})

    const getDetailMenu = () => {
        
        axios.get(`https://api.mudoapi.site/menu/${id}`).then(res => setMenu(res.data.data)).catch(err => console.log(err))
    
    }

    useEffect(() => getDetailMenu(), [])

    console.log(menu)

  return (
    <>
    <Navbar />

    <button style={{ marginBottom:'40px' }}>
        <Link to='/' >Back</Link>
    </button>

    <div className="card-menu" style={{  border: '1px solid cyan', maxWidth: '300px', padding: '5px' }}>
        <img src={menu.imageUrl} alt="" style={{  width: "300px"  }} />
        <h3 className="title">{menu.name}</h3>
        <p style={{ maxWidth: '300px' }}>{menu.description}</p>
        <h4>{menu.priceFormatted}</h4>
    </div>
    </>
  )
}

export default MenuDetails