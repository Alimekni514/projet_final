import React, { useContext } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import userContext from '../contexts/UserContext';

export default function Navbar() {
  const {user,setUser}=useContext(userContext);
  const navigate=useNavigate();
    const login =()=>{
    
    navigate("/SignIn");

    }
    const logout=()=>{
        setUser(null)
    }
  return (
    <div style={{display:'flex',justifyContent:'space-between'}}>
       <NavLink to={'/'}> Homepage</NavLink>
       {
        !user ? <></>: <NavLink to={'/Profile'}>Profile</NavLink>
       }
       <NavLink to={'/Movies'}> Movies</NavLink>
       <NavLink to={'/TvShows'}> Tv Shows</NavLink>
       <NavLink to={'/WatchTogether'}> Watch Together</NavLink>
       <NavLink to={'/Filtre'}> Filtre</NavLink>
       {
        !user ? <button onClick={login}> log in</button>
        : <button onClick={logout}> log out</button>
       }

    </div>
  )
}
