import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import userContext from '../../contexts/UserContext';
import { FaSearch } from 'react-icons/fa';
import style from './style.css';
// import balti from "../../img/balti.png";
import { useState } from 'react';
import SearchBar from './SearchBar';
export default function Navbar() {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();



  const login = () => {
    setTimeout(() => {
      navigate("/SignIn")
    }, 1000)
  }
  const logout = () => {
    setUser(null)
  }
  const signUp = () => {
    navigate("/SignUp");
  }
  return (
    <div className='navbar_main'>
      
      {/* <div className="netflix_logo" style={{display:"flex",alignItems:"center"}}>
          <img src={balti} alt="logo" style={{width:"60px"}}/>
          <span style={{marginRight:"10px"}}>edia Hub</span> 
      </div> */}
      <div className="nav_right">
        <div className='navlinks'>
        <NavLink to={'/'}> Homepage</NavLink>
        {
          !user ? <></> : <NavLink to={'/Profile'}>Profile</NavLink>
        }
        <NavLink to={'/Movies'}> Movies</NavLink>
        <NavLink to={'/TvShows'}> Tv Shows</NavLink>
        <NavLink to={'/WatchTogether'}> Watch Together</NavLink>
        </div>

       <div className='nav-left'>
       <div className='search-container'>
          <SearchBar />
        </div>
          <div className='buttons-nav'>
          {
          !user ? <></> : <h4>{user}</h4>
        }
        {
          !user ? <button className="signup"onClick={signUp}> Sign Up</button>
            : <></>
        }
        {
          !user ? <button onClick={login} className="signin"> log in</button>
            : <button onClick={logout} className="logout"> log out</button>
        }

          </div>
        
       </div>
    </div>
    </div>
  )
}

