import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Form() {
    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [email,setemail]=useState('')
    const data={username:username,password:password,email:email}
    const HandleClick =()=>{
        fetch('http://localhost:4000/register', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }

  return (
    <div>
      <div className='body'>
      <a className="logo" href="https://www.netflix.com/" target="_blank"><img src="https://bit.ly/2VdIFUK" /></a>
      <div className="login">
        <h1 className="login__title">Sign Up</h1>
        <div className="login__group">
          <input className="login__group__input" type="text" value={username} onChange={(e)=>setusername(e.target.value)} required />
          <label className="login__group__label">Username</label>
        </div>
        <div className="login__group">
          <input className="login__group__input" type="text"value={email} onChange={(e)=>setemail(e.target.value)} required />
          <label className="login__group__label">Email or phone number</label>
        </div>
        <div className="login__group">
          <input className="login__group__input" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
          <label className="login__group__label">Password</label>
        </div>
        <button className="login__sign-in"  onClick={HandleClick}> SIGN UP</button>
        
        <div className="login__secondary-cta">
        <NavLink className="login__secondary-cta__text" to={'/SignIn'}> Sign In </NavLink>
        <a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a></div>
      </div>

    </div>
        
    </div>
  )
}

