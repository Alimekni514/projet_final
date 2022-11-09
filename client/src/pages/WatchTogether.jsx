import { useContext } from "react";
import io from "socket.io-client";
import userContext from "../contexts/UserContext";
import { Chat } from "../components/watchTogether/index"
import { Navbar } from '../components/global components/index'
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
    const addminutes=minutes +1;
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
    const terfess=`${day} ${'nov'} ${year} ${hours}:${addminutes}:${seconds} `
    localStorage.setItem("time",terfess);
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
      <Chat socket={socket} username={user} room={localStorage.getItem('roomid')} />
      </div>
      <Countdown />
    </div>
  );

}







