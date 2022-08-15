import React, { useState } from 'react'
import './register.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [rdata, setrData] = useState({ userName: "", password: "", confirmpassword: "" });
    const [show,setshow]=useState(false)
    const navigate = useNavigate();
    const handleData = (e) => {
        e.preventDefault();
        if(rdata.password === rdata.confirmpassword){
            console.log(rdata);
             axios({
                url: "https://todo-server-pg.herokuapp.com/userRegister/register",
                //url: "https://contactmanagerserver.herokuapp.com/user/signup",
                method: "POST",
                headers: {
                },
                data: rdata
            }).then((res) => {
                console.log(res);
                navigate("/");
            }).catch((err) => {
                setshow(!show)
                setTimeout(()=>{
                    setshow(!setshow)
                },2000)
                console.log(err);
            })
        }else{
            alert("password & confirm password are not matching")
        }
        setrData({userName:"", password:"", confirmpassword:""})
    }
    const inputHandler = (e,id)=>{
        if(id === "username"){
            setrData({...rdata, userName:e.target.value})
        }else if(id === "password"){
            setrData({...rdata, password:e.target.value})
        }else{
            setrData({...rdata, confirmpassword:e.target.value})
        }
    }
    return (
        <>
            <div id='regisbody'>
            <div id='regisCard'>
              
                    <img className='icon' src='./register.png' alt=''/>
                    <h1>REGISTER</h1>
                        
                    
                    <form onSubmit={(e) => handleData(e)}>
                        <div className='userIn'><input  onChange={(e) => inputHandler(e, "username") }  className='regis' type="text"  value={rdata.userName} placeholder="User Name" ></input></div>
                        <div className='userIn'><input  onChange={(e) => inputHandler(e, "password") } className='regis' type="password" value={rdata.password} placeholder="Password" ></input></div>
                        <div className='userIn'><input   onChange={(e) => inputHandler(e, "confirmpassword")} className='regis' type="password" value={rdata.confirmpassword} placeholder="Confirm Password" ></input>
                        {show ? <span className='error1'>Username Exit</span> : ""}
                        </div>
                        <div className='userIn'>
                        <button id='register' type="submit" >Register</button>
                        </div>
                        
                    </form>
                    <div className='main'>Member Login</div>
                </div>
            </div>
        </>
    )
};
export default Register;
