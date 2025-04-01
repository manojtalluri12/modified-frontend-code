import React, { useState,useContext } from 'react'
import axios from 'axios'
import {store} from '../App'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [token,settoken]=useContext(store)
    const nav=useNavigate()
    const [data,setdata]=useState({
        email:"",
        password:"",
    })
    const handlechange=(e)=>{
        e.preventDefault()
        setdata({...data,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5000/login',data).then((arr)=>{
            settoken(arr.data.token);
        }).catch((err)=>{
            alert(err.response.data);
        })
            
    }
    if(token){
        nav('/profile')
    }
   
  return (
    <div>
        <form>
            <input type='email' name='email' onChange={handlechange}/>
            <input type='password' name='password' onChange={handlechange}/>
            <button onClick={handlesubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login
