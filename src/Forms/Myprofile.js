import axios from 'axios'
import {useState,useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../App'
import { useTheme } from './themecontext'

const Myprofile = () => {
    const [data,setdata]=useState(null)
    const nav=useNavigate()
    const [token,settoken]=useContext(store)
    const { theme, toggleTheme,isDark}=useTheme()
    
    useEffect(()=>{
        axios.get('http://localhost:5000/user',{
            headers:{
                'x-token':token
            }
        }).then((arr)=>{
            setdata(arr.data);
        }).catch((err)=>
            {
                
                alert(err.response.data)
                return nav('/')
            }    
        )
    },[])
    
    const Logout=()=>{
        settoken(null)
        return nav('/')
    }
    
  return (
    <div>
        {
            data && <div>
                <h1>welcome to dashboard {data.username}</h1> 
                <button onClick={Logout}>logout</button>
                <button onClick={toggleTheme}>{isDark ? "DRAK":"LIGHT"}</button>
            </div>
        }
       
    </div>
  )
}

export default Myprofile
