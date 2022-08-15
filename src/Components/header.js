import React from 'react'
 import './header.css'
const Header=()=> {
    const Authtoken=localStorage.getItem("authorization");
    const username = localStorage.getItem("userName");
  return (
    <>
      <div id="header1">
        <p className='paraUser'>{username}User Name</p>
        
      </div>
    </>
  )
}

export default Header
