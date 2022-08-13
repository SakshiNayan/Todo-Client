import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register=() =>{
    const [pass, setPass] =useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty) {
            if (pass === confirmPass) {
                setShowErrorMessage(false);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }
    }, [confirmPass])

    const handleCPass=(e)=>{
        setConfirmPass(e.target.value);
        setIsCPasswordDirty(true);

    }
  return (
    <div className='body1'>
      <div id='regisbody'>
        <div id='regisCard'>
            <img className='icon' src='./register.png' alt=''/>
            <h1>REGISTER</h1>
            <div className='userIn'>
                <input className='regis' type="text" placeholder='UserName'></input>
            </div>
            <div className='userIn'>
                <input className='regis' type="password" placeholder='password' value={pass} onChange={(e) => { setPass(e.target.value) }}></input>
            </div>
            <div className='userIn'>
                <input className='regis' type="password" placeholder='confirm pass' value={confirmPass}  onChange={handleCPass}></input>
            </div>
            {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
            <div className='userIn'>
               <Link to='/'><button id='register' type="">Register</button></Link> 
            </div>
            <div className='main'>Member Login</div>
            
        </div>

      </div>
    </div>
  )
}

export default Register;
