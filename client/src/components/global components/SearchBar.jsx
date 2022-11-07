import React ,{useState,useContext} from 'react'
import {FaSearch} from 'react-icons/fa'
import SearchContext from '../../contexts/SearchContext'
import {useNavigate } from 'react-router-dom';
export default function SearchBar() {
    const [input,setinput]=useState('')
    const {setsearch}=useContext(SearchContext)
    const navigate=useNavigate();
    const HandleSearch=async()=>{
      const res=await fetch(`https://api.themoviedb.org/3/search/multi?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US&page=1&include_adult=false&query=${input}`)
      const pro= await res.json();
      const list=pro.results;
      setsearch(list)
        setTimeout(()=> {
          navigate("/filtres")
     },1000)

     }
  return (
    <div >
    <input type='text' placeholder='search movie , Tv Shows ,actors' value={input} onChange={(e)=>{setinput(e.target.value) }}/>
     <FaSearch onClick={()=>HandleSearch()}/>
    </div>
  )
}
