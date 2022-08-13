import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"
const Sidebar=()=> {
  return (
    <>
    <div className='sidebar'>
        <div className='h2'><h2>TODO LIST</h2></div>
        <div className='h3'><h3>History</h3></div>
        <div className='logout'><Link to='/'><button id='b-logout' type="">LOGOUT</button></Link></div>

    </div>
      
    </>
  )
}

export default Sidebar
