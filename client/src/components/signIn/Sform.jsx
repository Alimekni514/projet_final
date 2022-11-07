
import { useState } from 'react';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import userContext from '../../contexts/UserContext';
import io from "socket.io-client";
var reqotoken;
const data1 = { username: "RouaApi", password: "6ec1439555/*" };


async function fetchData() {
  try {
    const myData = await fetch("https://api.themoviedb.org/3/authentication/token/new?api_key=b3ec5aad46e51258856256128c47b00c");
    const tokenObj = await myData.json();
    const token = tokenObj.request_token;
    const myData1 = await fetch("https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=b3ec5aad46e51258856256128c47b00c", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data1, request_token: token })
    });
    const res = await myData1.json();
    const myData2 = await fetch("https://api.themoviedb.org/3/authentication/session/new?api_key=b3ec5aad46e51258856256128c47b00c", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ request_token: token })
    });
    const sessionObj = await myData2.json();
    const sessionId = sessionObj.session_id;
    localStorage.setItem("sessionid", sessionId);

    const guestres = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=b3ec5aad46e51258856256128c47b00c')
    const guestsessionid = await guestres.json();
    localStorage.setItem('guest_sessionid', guestsessionid.guest_session_id)
    const watchlist = await fetch("https://api.themoviedb.org/3/list?api_key=b3ec5aad46e51258856256128c47b00c&session_id=7681eb6a4de93e5f987a99934963029a4166328d",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: "This is",
          description: "this is roua",
          language: "en"
        })
      })
    const Listres = await watchlist.json();
    const ListId = Listres.list_id;
    localStorage.setItem("Watchlistid", ListId);


    const favouritelist = await fetch("https://api.themoviedb.org/3/list?api_key=b3ec5aad46e51258856256128c47b00c&session_id=7681eb6a4de93e5f987a99934963029a4166328d",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: "This",
          description: "this is ali",
          language: "en"
        })
      })
    const favouriteListres = await favouritelist.json();
    const favListId = favouriteListres.list_id;
    localStorage.setItem("favlist", favListId);


    const ratedlist = await fetch("https://api.themoviedb.org/3/list?api_key=b3ec5aad46e51258856256128c47b00c&session_id=7681eb6a4de93e5f987a99934963029a4166328d",
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: "Th",
          description: "this is sayed",
          language: "en"
        })
      })
    const rateres = await ratedlist.json();
    const rateId = rateres.list_id;
    localStorage.setItem("ratelistid", rateId);


  } catch (reason) {
    console.log(reason)
  } finally {
    console.log("Saye ya rou 5edmett !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }

}
function Sform() {
  const [room, setRoom] = useState("");
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const navigate = useNavigate();
  const data = { password: password, email: email };
  const { user, setUser } = useContext(userContext);
  const HandleClick = () => {
    fetch('http://localhost:4000/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(`Error:${data.error}`)
        }
        else {
          localStorage.setItem("token", data.token);
          navigate("/");
          var token = localStorage.getItem("token");
          var decoded = jwt_decode(token);
          const { username } = decoded;
          setUser(username);
          fetchData();
        }
      })
      .catch((error) => {
        alert(`Error:${error}`);
      });
  }
  return (
    <div>
      password:<input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
      email:<input type="e-mail" value={email} onChange={(e) => setemail(e.target.value)} />
      <button onClick={HandleClick}> SIGN IN</button>
    </div>
  )
}

export default Sform