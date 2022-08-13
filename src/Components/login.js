import React, { useState } from 'react'
import './login.css'

import axios from "axios";
import { useNavigate } from 'react-router-dom'

const Login=()=> {
    const navigate=useNavigate()
    const [data,setdata]= useState({
        "userName":"",
        "password":""
      })
   

      const handleLogin=(e)=>{
        e.preventDefault()
        if(data.password.length && data.userName.length){
        axios.post("https://localhost:3001/userRegister/Signin",data).then((loginData)=>{
          localStorage.setItem("authorization",loginData.data.Authtoken) 
         
        
          localStorage.setItem("Username", loginData.data.userName)
        
        navigate("/body")
        })}
    }
  return (
    <>
      <div id="loginPg">
        <div id='loginCard'>
            <img src='./images.png' className='log' alt=''></img>
            <h1>Member Login</h1>
            <div className='inputDiv'>
                <input 
                    className='userinput' 
                    type='text' 
                    placeholder='UserName' 
                    onChange={(e)=> {setdata({...data, userName: e.target.value})}}/>
            </div>
            <div className='inputDiv'>
                <input 
                    className='userinput' 
                    type='password' 
                    placeholder='password'
                    onChange={(e)=> {setdata({...data, password: e.target.value})}}/>
            </div>
            <div className='inputDiv'>
               <button className='userB' type='button' onClick={handleLogin}>LOGIN</button>
            </div>
            <div className='bottom'>
                <div className='b1'>
                    <a href='/register'>Register?</a>
                    <span className='b2'>Forgot password?</span>
                    </div>
                
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
