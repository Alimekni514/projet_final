
import { useState } from 'react';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import userContext from '../contexts/UserContext';
function Sform() {
    const [password,setpassword]=useState('');
    const [email,setemail]=useState('');
    const navigate=useNavigate();
    const data={password:password,email:email};
    const data1={username:"RouaApi",password:"6ec1439555/*",request_token:localStorage.getItem("sessionToken")};
    const requesttoken={request_token:localStorage.getItem("sessionToken")};
    const {user,setUser}=useContext(userContext);
    const HandleClick =()=>{
        fetch('http://localhost:4000/login', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => {
           if( data.error) {
            alert(`Error:${data.error}`)}
            else {
                localStorage.setItem("token",data.token);
                navigate("/");
                var token = localStorage.getItem("token");
                var decoded = jwt_decode(token);
                const {username}=decoded;
                setUser(username);
                fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=b3ec5aad46e51258856256128c47b00c")
                .then(response=>response.json())
                .then(data=>localStorage.setItem("sessionToken",data.guest_session_id))
                .catch(err=>console.log(err));
          }})
            .catch((error) => {
              alert(`Error:${error}`);
            });
    }
  return (
    <div>
        password:<input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
        email:<input type="e-mail" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <button onClick={HandleClick}> SIGN IN</button>
    </div>
  )
}

export default Sform