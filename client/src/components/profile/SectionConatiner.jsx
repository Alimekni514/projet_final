import React, { useContext } from "react";
import rateContext from "../../contexts/RateContext";
import MovieContext from "../../contexts/MovieContext";
import "bootstrap/dist/css/bootstrap.min.css";
function SectionConatiner({ img, title, rate,id }) {
  const { rated, setrated } = useContext(MovieContext);
  const { ratee ,setRate} = useContext(rateContext);
  const Handledelete =async () => {
    const listecopy=[...rated];
    const ratescopy=[...ratee];
    const indexmovie=listecopy.map((movie)=>movie.original_title).indexOf(title);
    const deletefetch =await fetch(`https://api.themoviedb.org/3/list/${localStorage.getItem("ratelistid")}/remove_item?api_key=b3ec5aad46e51258856256128c47b00c&session_id=${localStorage.getItem("sessionid")}`,{
        method:'POST',
        body:JSON.stringify({media_id:id}),
        headers:{ 'Content-Type': 'application/json'}
    })
    const deleteres= await deletefetch.json();
    console.log(deleteres)
    listecopy.splice(indexmovie,1);
    ratescopy.splice(indexmovie,1);
    setRate(ratescopy);
    setrated(listecopy);

  };
  return (
    <div className="movie">
      <div className="img-containerr">
        <img src={img} alt="Movie/serie-pic" />
      </div>
      <div className="media-info">
        <h3> {title}</h3>
        <span> {rate} </span>
        <button onClick={Handledelete}>Delete</button>
      </div>
    </div>
  );
}

export default SectionConatiner;
