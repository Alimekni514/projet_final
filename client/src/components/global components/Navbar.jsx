import React, { useContext} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import userContext from '../../contexts/UserContext';
import {FaSearch} from 'react-icons/fa'
import style from './style.css'
import { useState } from 'react';
import SearchBar from './SearchBar';
export default function Navbar() {
  const {user,setUser}=useContext(userContext);
  const navigate=useNavigate();
 
 
  
    const login =()=>{
   setTimeout(()=> {
        navigate("/SignIn")
   },1000)
    }
    const logout=()=>{
        setUser(null)
    }
    const signUp=()=>{
      navigate("/SignUp");
    }
  return (
    <div className='navbar'>
      <span className='logo'>MediaHub</span>
       <NavLink to={'/'}> Homepage</NavLink>
       {
        !user ? <></>: <NavLink to={'/Profile'}>Profile</NavLink>
       }
       <NavLink to={'/Movies'}> Movies</NavLink>
       <NavLink to={'/TvShows'}> Tv Shows</NavLink>
       <NavLink to={'/WatchTogether'}> Watch Together</NavLink>
       <div className='search-container'>
       <SearchBar/>
       </div>

       {
        !user? <></>:<h4>{user}</h4>
       }
       {
        !user ? <button onClick={signUp}> Sign Up</button>
        :<></>
       }
       {
        !user ? <button onClick={login}> log in</button>
        : <button onClick={logout}> log out</button>
       }

    </div>
  )
}

