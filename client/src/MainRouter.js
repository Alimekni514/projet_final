import React from "react";
import { Route,Routes } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'
import {Homepage,TvShows,Movies,WatchTogether,Filtre,Profile,SignIn,SignUp,Errors} from './pages/index'
import UserContext from './contexts/UserContext'
import { useState } from "react";
export default function MainRouter(){
    const [user,setUser]=useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/TvShows" element={<TvShows/>}/>
            <Route path="/Movies" element={
            <ProtectedRoute user={user}>
            <Movies/>
            </ProtectedRoute>
            }/>
            <Route path="/WatchTogether" element={<WatchTogether/>}/>
            <Route path="/Filtre" element={<Filtre/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/SignIn" element={<SignIn/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/authorisation-error" element={<Errors/>}/>

        </Routes> 
        </UserContext.Provider>
    )
}