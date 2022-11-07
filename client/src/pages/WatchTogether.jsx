import { useContext } from "react";
import io from "socket.io-client";
import userContext from "../contexts/UserContext";
import {Chat} from "../components/watchTogether/index"
export default function WatchTogether() {
  const socket = io.connect("http://localhost:4000");
  const { user} = useContext(userContext);
  const room ='123'
const joinRoom = () => {
    socket.emit("join_room", room);
    localStorage.setItem('roomid',room)
};
  return (
    <div className="App">

       {joinRoom ()}

       <Chat socket={socket} username={user} room={localStorage.getItem('roomid')} />
    
    </div>
  );

  }


 

 


