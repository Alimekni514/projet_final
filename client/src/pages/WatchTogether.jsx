import { useContext } from "react";
import io from "socket.io-client";
import userContext from "../contexts/UserContext";
import { Chat } from "../components/watchTogether/index"
import { Navbar } from '../components/global components/index'
import dahmer from '../img/dahmer.mp4'
import { Countdown } from "../components/watchTogether/index";
import { useState,useEffect } from "react";
export default function WatchTogether() {
  const [date,setdate]=useState();
  const getTime=()=> {
    const Time=new Date();
    const Timems=Time.getTime();
    const seconds = Time.getSeconds();
    const minutes = Time.getMinutes();
    let hours = Time.getHours();
    const addminutes=minutes +3;
    const year=Time.getFullYear();
    const month=Time.getMonth() ;
    const day=Time.getDate();
    let date7= {
        hours:hours,
        minutes:addminutes,
        seconds:seconds,
        year:year,
        month:month,
        day:day,
    }
    const terfess=new Date(`${date7.year}`,`${date7.month}`,`${date7.day}`,`${date7.hours }`,`${date7.minutes}`,`${date7.seconds}`);
    console.log(terfess)
    const timee=terfess.getTime();
    console.log(timee)
    localStorage.setItem("time",timee);
  }
   useEffect(()=> {
    getTime();
  },[]);
  const socket = io.connect("http://localhost:4000");
  const { user } = useContext(userContext);
  const room = '123'
  const joinRoom = () => {
    socket.emit("join_room", room);
    localStorage.setItem('roomid', room)
  };
  return (
    <div>
      
      {joinRoom()}
      <Navbar />
      <div style={{display:'flex', justifyContent:'space-between'}}>       
      <video src={dahmer} autoPlay loop muted />
      <Chat socket={socket} username={user} room={localStorage.getItem('roomid')} />
      </div>
      <Countdown time={date}/>
    </div>
  );

}







