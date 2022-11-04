import React, { useContext } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import userContext from '../contexts/UserContext';
import style from './style.css'
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
       <NavLink to={'/Filtre'}> Filtre</NavLink>
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
