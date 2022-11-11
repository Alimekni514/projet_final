import React ,{useState,useContext} from 'react'
import {FaSearch} from 'react-icons/fa'
import SearchContext from '../../contexts/SearchContext'
import ResearchContext from '../../contexts/ResearchContext'
import {useNavigate } from 'react-router-dom';
export default function SearchBar() {
    const [input,setinput]=useState('')
    const {setsearch}=useContext(SearchContext)
    const {setresearch}=useContext(ResearchContext)
    const navigate=useNavigate();
    const handleEnter=(e)=> {
      if (e.key === 'Enter' || e.keyCode === 13) {
        HandleSearch();
    }
    }
    const HandleSearch=async()=>{
      const Mres=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US&page=1&include_adult=false&query=${input}`)
      const Mpro= await Mres.json();
      const Mlist=Mpro.results;
      setsearch(Mlist)
      const Tres=await fetch(`https://api.themoviedb.org/3/search/tv?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US&page=1&include_adult=false&query=${input}`)
      const Tpro= await Tres.json();
      const Tlist=Tpro.results;
      setresearch(Tlist)
      navigate("/filtres")
    

     }
  return (
    <div className='searchbar'>
    <input type='text' placeholder='search movie , Tv Shows' value={input} onChange={(e)=>{setinput(e.target.value) }} onKeyUp={()=>handleEnter()}/>
     <FaSearch  className="searchicon"style={{fontSize:"24px"}} onClick={()=>HandleSearch()}/>
    </div>
  )
}
