import React, { useEffect, useState, useContext } from "react";
import{WatchedList, ListContainer} from "../components/profile/index";
import rateContext from "../contexts/RateContext";
import MovieContext from "../contexts/MovieContext";
import WatchContext from "../contexts/WatchContext"
import userContext from '../contexts/UserContext';
export default function Profile() {
  const {user}=useContext(userContext);
  const { ratee } = useContext(rateContext);
  const [watchmovie, setwatch] = useState();
  const [rated, setrated] = useState();
  const fetchData = async () => {
    try {
      const watch = await fetch(
        `https://api.themoviedb.org/3/list/${localStorage.getItem(
          "Watchlistid"
        )}?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US`
      );
      const watchlist = await watch.json();
      const list = watchlist.items;
      setwatch(list);
      console.log(list);
      const rated = await fetch(
        `https://api.themoviedb.org/3/list/${localStorage.getItem(
          "ratelistid"
        )}?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US`
      );
      const ratedList = await rated.json();
      const rateLlist = ratedList.items;
      for (let i = 0; i < ratee.length; i++) {
        rateLlist[i].rateuser = ratee[i];
      }
      console.log(ratee);
      setrated(rateLlist);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>{user}</h1>
      <MovieContext.Provider value={{ rated, setrated }}>
        <WatchContext.Provider value={{watchmovie, setwatch}}>
        <WatchedList heading={"watched Movie"} list={watchmovie} />
        <ListContainer heading={"Rated Movie"} list={rated} />
        </WatchContext.Provider>
      </MovieContext.Provider>
    </div>
  );
}
