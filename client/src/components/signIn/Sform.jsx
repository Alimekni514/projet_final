import style from './style.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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
          const MySwal = withReactContent(Swal)
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${data.error}`,
          })
          // alert(`Error:${data.error}`)
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
    <div className='body'>
      <a className="logo" href="https://www.netflix.com/" target="_blank"><img src="https://bit.ly/2VdIFUK" /></a>
      <div className="login">
        <h1 className="login__title">Sign In</h1>
        <div className="login__group">
          <input className="login__group__input" type="text" value={email} onChange={(e) => setemail(e.target.value)} required />
          <label className="login__group__label">Email or phone number</label>
        </div>
        <div className="login__group">
          <input className="login__group__input" type="password" value={password} onChange={(e) => setpassword(e.target.value)} required />
          <label className="login__group__label">Password</label>
        </div>
        <button className="login__sign-in" onClick={HandleClick} type="button">Sign In</button>
        <div className="login__secondary-cta">
        <NavLink className="login__secondary-cta__text" to={'/SignUp'}> Register </NavLink>
          <a className="login__secondary-cta__text login__secondary-cta__text--need-help" href="#">Need help?</a></div>
      </div>

    </div>
  )
}

export default Sform