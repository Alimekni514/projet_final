import React ,{useContext}from 'react'
import userContext from '../contexts/UserContext';
export default function TvShows() {
  const {user,setUser}=useContext(userContext);
  return (
    <>TvShows
    <h1>{user}</h1></>
  )
}
