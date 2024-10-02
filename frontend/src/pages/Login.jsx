import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios"
function Login() {
    const [formData,setFormData]=useState({
        email:'',
        password:'',
    })
    const handleInput=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleForm=async(e)=>{
        e.preventDefault();
        // console.log(formData)
        try {
            const login=await axios.post("http://localhost:3000/login",formData)
        console.log(login)
        } catch (error) {
            console.log("error : ",error)
        }
    }
  return (
    <>
      <Navbar/>
      <h1 className='text-center text-3xl font-bold mt-5 p-5'>Login</h1>
    <div className="container mx-auto shadow-md space-y3 rounded-md p-5">
        <form action="" onSubmit={handleForm}>
            Email:<input type="email" value={formData.email} placeholder='Email' onChange={handleInput} name="email"/><br/>
            Email:<input type="password" value={formData.password} placeholder='password' onChange={handleInput} name="password"/><br/>
            <button className="btn">Login</button>
        </form>

    </div>
    </>
  )
}

export default Login
