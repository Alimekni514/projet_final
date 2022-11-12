
import io from "socket.io-client";
import userContext from "../contexts/UserContext";
import MoviePoll from '../components/watchTogether/MoviePoll'
import { Chat } from "../components/watchTogether/index"
import { Navbar } from '../components/global components/index'
import { Countdown } from "../components/watchTogether/index";
import { useContext} from "react";
import Program from "../components/watchTogether/Program";
export default function WatchTogether() {
  
  const socket = io.connect("http://localhost:4000");
  const { user } = useContext(userContext);
  const room = '123'
  const joinRoom = () => {
    socket.emit("join_room", room);
    localStorage.setItem('roomid', room)
  };
  return (
    <div style={{ color:'white'}}>
      
      {joinRoom()}
      <Navbar />
      <div style={{display:'flex', justifyContent:'space-between'}}>   
      <Countdown/>    
      <Chat socket={socket} username={user} room={localStorage.getItem('roomid')} />
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',position:'relative'}}>
      <MoviePoll/>
      <Program/>
      </div>
    
    </div>
  );

}







