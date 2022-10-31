
import { useState } from 'react';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import userContext from '../contexts/UserContext';
var  reqotoken;
const data1={username:"RouaApi",password:"6ec1439555/*"};
async function fetchData() {
  try {
    const myData=  await fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=b3ec5aad46e51258856256128c47b00c");
   const tokenObj=await myData.json();
   const token=tokenObj.request_token;
   const myData1=await fetch("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=b3ec5aad46e51258856256128c47b00c", {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({...data1,request_token:token})
   });
   const res=await myData1.json();
   const myData2=await fetch("https://api.themoviedb.org/3/authentication/session/new?api_key=b3ec5aad46e51258856256128c47b00c", {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({request_token:token})
  });
  const sessionObj=await myData2.json();
  const sessionId=sessionObj.session_id;
  localStorage.setItem("sessionid",sessionId);
  }catch(reason) {
    console.log(reason)
  }finally{
    console.log("Saye ya rou 5edmett !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }
    
}
function Sform() {
        const [password,setpassword]=useState('');
    const [email,setemail]=useState('');
    const navigate=useNavigate();
    const data={password:password,email:email};
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
                fetchData();
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