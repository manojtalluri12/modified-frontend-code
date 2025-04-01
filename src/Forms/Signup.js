import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const nav=useNavigate()
    const [data,setdata]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
    })
    const handlechange=(e)=>{
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/reg',data).then((arr)=>{
            alert(arr.data);
           return nav('/login')
        }).catch((err)=>{
            alert(err.response.data);
        })
    }
  return (
    <div>
        <form>
            <input type='text' name='username' onChange={handlechange}/>
            <input type='email' name='email' onChange={handlechange}/>
            <input type='password' name='password' onChange={handlechange}/>
            <input type='password' name='confirmpassword' onChange={handlechange}/>
            <button onClick={handlesubmit}>Submit</button>
        </form>
      
    </div>
  )
}

export default Signup
