import React, { useState } from 'react'
import Header from './header'
import Sidebar from './sidebar'
import './body.css'
const Body=() =>{
    //const [twoButton, setTwoButton] = useState("");

    const handleClick=(e)=>{

    }
  return (

    <>
    <Header/>
    <Sidebar/>

    <div id='userTable'>
    <table className='itemrow'>
        <tr>
            <th>Activity</th>
            <th>Status</th>
            <th>Time taken <br></br>(Hrs:Min:Sec)</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>Running</td>
            <td></td>
            <td></td>
            <td><button type="" onClick={handleClick} >Start</button></td>
        </tr>
        <tr>
            <td>Drinking</td>
            <td></td>
            <td></td>
            <td><button type="" onClick={handleClick}>Start</button></td>
        </tr>
        <tr>
            <td>Sleeping</td>
            <td></td>
            <td></td>
            <td><button type="" onClick={handleClick}>Start</button></td>
        </tr>
        <tr>
            <td>Cooking</td>
            <td></td>
            <td></td>
            <td><button type="" onClick={handleClick} >Start</button></td>
        </tr>
        <tr>
            <td>Eating</td>
            <td></td>
            <td></td>
            <td><button type="" onClick={handleClick}>Start</button></td>
        </tr>
        <tr>
            <td>Washing</td>
            <td></td>
            <td></td>
            <td><button type="" onClick={handleClick}>Start</button></td>
        </tr>
    </table>
    </div>
    
      
    </>
  )
}

export default Body