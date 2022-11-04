import React from 'react'
import { useState } from 'react'
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
        username:<input type="text" value={username} onChange={(e)=>setusername(e.target.value)} />
        password:<input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        email:<input type="e-mail" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <button onClick={HandleClick}> SIGN UP</button>
    </div>
  )
}

