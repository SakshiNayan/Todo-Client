import React from 'react'
 import './header.css'
const Header=()=> {
    const Authtoken=localStorage.getItem("authorization");
    
    const userName = localStorage.getItem("userName");
  return (
    <>
      <div id="header1">
        <p className='paraUser'>{userName} User Name</p>
        
      </div>
    </>
  )
}

export default Header
