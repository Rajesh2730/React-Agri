import React, { useState } from 'react'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Signup = () => {
    const navigate = useNavigate();
  
    const [Data , setFormData] = useState({
      uname:"",
      email:"",
      pass:"",
      mob:""
  
    })
  
    const update = () => {
      axios
      .post("http://localhost:4000/signup",Data)
      .then((res)=>{
        console.log("SignUp Successfully",res);
        navigate("/")
      })
      .catch((err)=>{
        console.log("SignUp Failed!!",err);
      })
  
      setFormData({
        uname:"",
        email:"",
        pass:"",
        mob:""
      })
    }
  
    const change = (e) =>{
      const {name , value} = e.target
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }))
    }
  return (
    <div className='signup_page'>
        <NavBar/>
        <div className='container-su'>
            <div className='cont-container-su'>
                <span className='txt1'>Sign-Up</span>
                <form  onSubmit={update}>
                <div className='input-name'>
                <input className='input' type='text' name='uname' value={Data.uname} autoComplete='off' onChange={change} required/>
                <label className='username'>Username</label><br/><br/>
                </div>
                <div className='input-name'>
                <input className='input' type='text' name='email' value={Data.email} onChange={change} autoComplete='off' required/>
                <label className='username'>Email</label><br/><br/>
                </div>
                <div className='input-name'>
                <input className='input' type='password' name='pass' onChange={change} value={Data.pass} minLength={8} autoComplete='off' required/>
                <label className='username'>Password</label><br/><br/>
                </div>
                <div className='input-name'>
                <input className='input' type='tel' name='mob' onChange={change} value={Data.mob} maxLength={10} autoComplete='off' required/>
                <label className='username'>Mobile</label><br/><br/>
                </div>
                <input className='submit' type='submit' value='Sign-Up'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup