import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./sidebar.css"
const Sidebar=()=> {
  const Navigate=useNavigate()
  const logoutHandler = () =>{
    localStorage.setItem("authorization", "")
    localStorage.setItem("userName", "")
    Navigate("/");
}
  return (
    <>
    <div className='sidebar'>
        <div className='h2'><h2>TODO LIST</h2></div>
        <div className='h3'><h3>History</h3></div>
        <div className='logout'><button id='b-logout' onClick={()=>{logoutHandler()}}>LOGOUT</button></div>

    </div>
      
    </>
  )
}

export default Sidebar
