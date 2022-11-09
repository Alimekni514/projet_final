import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'
import { Homepage, TvShows, Movies, WatchTogether, Profile, SignIn, SignUp, Errors,Actors, Filtres } from './pages/index'
import UserContext from './contexts/UserContext'
import RateContext from './contexts/RateContext'
import SearchContext from "./contexts/SearchContext";
import ResearchContext from "./contexts/ResearchContext";
import { useState } from "react";
export default function MainRouter() {
    const [user, setUser] = useState(null)
    const [ratee, setRate] = useState([])
    const [search,setsearch]=useState([])
    const [research,setresearch]=useState([])
    const [time,setTime]=useState('')
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <RateContext.Provider value={{ ratee, setRate }}>
            <SearchContext.Provider value={{search,setsearch }}>
                <ResearchContext.Provider value={{research,setresearch}}>
    
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/TvShows" element={
                     <ProtectedRoute user={user}>
                    <TvShows />
                    </ProtectedRoute>
                } />
                    <Route path="/Movies" element={
                        <ProtectedRoute user={user}>
                            <Movies />
                        </ProtectedRoute>
                    } />
                    <Route path="/WatchTogether" element={
                        <ProtectedRoute user={user}>
                    <WatchTogether />
                    </ProtectedRoute>} />
                    <Route path="/filtres" element={<Filtres />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/authorisation-error" element={<Errors />} />
                    <Route path="/actors" element={<Actors />} />
                </Routes>
                </ResearchContext.Provider>
                </SearchContext.Provider>
            </RateContext.Provider>
        </UserContext.Provider>
    )
}