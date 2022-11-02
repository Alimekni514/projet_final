import React, { useEffect ,useState,useContext } from 'react'
import ListContainer from '../components/profile/ListContainer'
import rateContext from '../contexts/RateContext'
export default function Profile() {
  const {ratee}=useContext(rateContext)
  const [watchmovie,setwatch]=useState()
  const [rated,setrated]=useState()
  useEffect(async () => {
    try {
      const watch = await fetch(`https://api.themoviedb.org/3/list/${localStorage.getItem("Watchlistid")}?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US`)
      const watchlist = await watch.json();
      const list=watchlist.items
      setwatch(list)
      console.log(list)
      const rated =await fetch(`https://api.themoviedb.org/3/list/${localStorage.getItem("ratelistid")}?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US`)
      const ratedList= await rated.json();
      const rateLlist=ratedList.items
      setrated(rateLlist)
      console.log(rateLlist)
      console.log(ratee)
    }
  catch (err) {
    console.log(err)
   }}, [])

   
      
return (
  <div>
 <ListContainer heading={"watched Movie"} list={watchmovie}/>
 <ListContainer heading={"Rated Movie"} list={rated}/>


  </div>
)
}
