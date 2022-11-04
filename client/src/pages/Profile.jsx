import React, { useEffect, useState, useContext } from "react";
import ListContainer from "../components/profile/ListContainer";
import rateContext from "../contexts/RateContext";
import MovieContext from "../contexts/MovieContext";
export default function Profile() {
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
      <MovieContext.Provider value={{ rated, setrated }}>
        <ListContainer heading={"watched Movie"} list={watchmovie} />
        <ListContainer heading={"Rated Movie"} list={rated} />
      </MovieContext.Provider>
    </div>
  );
}
