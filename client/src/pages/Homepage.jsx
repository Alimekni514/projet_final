import React from 'react'
import Navbar from '../components/Navbar'
import style from './style.css'
import dahmer from '../img/dahmer.mp4'
import SwiperContainer from '../components/SwiperContainer'
import { useEffect, useState } from 'react'


export default function Homepage() {
  const [url1, setUrl1] = useState('')
  const [url2, setUrl2] = useState('')
  const [url3, setUrl3] = useState('')
  const [url4, setUrl4] = useState('')

  useEffect(
    async () => {
      try {
        const topdata = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US&page=2")
        const res1 = await topdata.json();
        const TopRated = res1.results;

        var url1 = TopRated.map(movie => ({ ...movie, img: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }));
        setUrl1(url1)
        const nowdata = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US&page=3")
        const res2 = await nowdata.json();
        const playingnow = res2.results;

        var url2 = playingnow.map(movie => ({ ...movie, img: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }));
        setUrl2(url2)
        const Updata = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US&page=1")
        const res3 = await Updata.json();
        const upcoming = res3.results;

        var url3 = upcoming.map(movie => ({ ...movie, img: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }));
        setUrl3(url3)

        const populardata = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=b3ec5aad46e51258856256128c47b00c&language=en-US&page=2")
        const res4 = await populardata.json();
        const popular = res4.results;

        var url4 = popular.map(movie => ({ ...movie, img: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }));
        setUrl4(url4)

      } catch (err) {
        console.log(err)
      }
      finally {
        console.log("khedmet ya aloulou AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      }

    }
    , [])

  return (
    <div>
      <div className='main'>
        <div className="overlay"></div>
        <video src={dahmer} autoPlay loop muted />
        <div className="content">
          <Navbar />
        </div>
      </div >
      <SwiperContainer heading={"Popular Movie"} list={url1} ></SwiperContainer>
      <SwiperContainer heading={"Popular Movie"} list={url2} ></SwiperContainer>
      <SwiperContainer heading={"Popular Movie"} list={url3} ></SwiperContainer>
      <SwiperContainer heading={"Popular Movie"} list={url4} ></SwiperContainer>

    </div>
  )
}
