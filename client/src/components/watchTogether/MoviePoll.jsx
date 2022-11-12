import React, { useState, useEffect } from "react";
import "./Poll.css";
function MoviePoll() { 
const [voteData1, setVoteData1] = useState();
const [totalVotes1, setTotalVotes1] = useState(0);
const [voted1, setVoted1] = useState(false); 
const [voteData2, setVoteData2] = useState();
const [totalVotes2, setTotalVotes2] = useState(0);
const [voted2, setVoted2] = useState(false); 
const [voteData3, setVoteData3] = useState();
const [totalVotes3, setTotalVotes3] = useState(0);
const [voted3, setVoted3] = useState(false); 
const [voteData4, setVoteData4] = useState();
const [totalVotes4, setTotalVotes4] = useState(0);
const [voted4, setVoted4] = useState(false); 
const url1 = "http://localhost:4000/poll1";
const url2= "http://localhost:4000/poll2"
const url3="http://localhost:4000/poll3"
const url4="http://localhost:4000/poll4"

const style={
  height:'40px',
  backgroundColor:'white',
  width:'250px',
  color:'black',
  border:'1px solid black',
  padding:'8px 20px',
  textAlign:'center',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  borderRadius:'5px',
  fontWeight:'bold',
  fontSize:'20px'

}
useEffect(() => {
  fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      setVoteData1(data);
      let sum = 0;
      data.forEach(function (obj) {
        sum += obj.votes;
      });
      setTotalVotes1(sum);
    });
}, []);

const submitVote1 = (e) => {
    if(voted1 === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData1[voteSelected].votes;
      voteData1[voteSelected].votes = voteCurrent + 1;
      setTotalVotes1(totalVotes1 + 1);
      setVoted1(!voted1);
      const options = {
        method: "POST",
        body: JSON.stringify(voteData1),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url1, options)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };
  let pollOptions1;
if (voteData1) {
  pollOptions1 = voteData1.map((item) => {
    return (
      <li key={item.id}>
        <button onClick={submitVote1} data-id={item.id}>
          {item.option}
          <span>- {item.votes} Votes</span>
        </button>          
      </li>
    );
  });
}

useEffect(() => {
  fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      setVoteData2(data);
      let sum = 0;
      data.forEach(function (obj) {
        sum += obj.votes;
      });
      setTotalVotes2(sum);
    });
}, []);

const submitVote2 = (e) => {
    if(voted2 === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData2[voteSelected].votes;
      voteData2[voteSelected].votes = voteCurrent + 1;
      setTotalVotes2(totalVotes2 + 1);
      setVoted2(!voted2);
      const options = {
        method: "POST",
        body: JSON.stringify(voteData2),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url2, options)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };
  let pollOptions2;
if (voteData2) {
  pollOptions2 = voteData2.map((item) => {
    return (
      <li key={item.id}>
        <button onClick={submitVote2} data-id={item.id}>
          {item.option}
          <span>- {item.votes} Votes</span>
        </button>          
      </li>
    );
  });
}

useEffect(() => {
  fetch(url3)
    .then((response) => response.json())
    .then((data) => {
      setVoteData3(data);
      let sum = 0;
      data.forEach(function (obj) {
        sum += obj.votes;
      });
      setTotalVotes3(sum);
    });
}, []);

const submitVote3 = (e) => {
    if(voted3 === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData3[voteSelected].votes;
      voteData3[voteSelected].votes = voteCurrent + 1;
      setTotalVotes3(totalVotes3 + 1);
      setVoted3(!voted3);
      const options = {
        method: "POST",
        body: JSON.stringify(voteData3),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url3, options)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };
  let pollOptions3;
if (voteData3) {
  pollOptions3 = voteData3.map((item) => {
    return (
      <li key={item.id}>
        <button onClick={submitVote3} data-id={item.id}>
          {item.option}
          <span>- {item.votes} Votes</span>
        </button>          
      </li>
    );
  });
}
useEffect(() => {
  fetch(url4)
    .then((response) => response.json())
    .then((data) => {
      setVoteData4(data);
      let sum = 0;
      data.forEach(function (obj) {
        sum += obj.votes;
      });
      setTotalVotes4(sum);
    });
}, []);

const submitVote4 = (e) => {
    if(voted4 === false) {
      const voteSelected = e.target.dataset.id;
      const voteCurrent = voteData4[voteSelected].votes;
      voteData4[voteSelected].votes = voteCurrent + 1;
      setTotalVotes4(totalVotes4 + 1);
      setVoted4(!voted4);
      const options = {
        method: "POST",
        body: JSON.stringify(voteData4),
        headers: { "Content-Type": "application/json" },
      };
      fetch(url4, options)
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };
  let pollOptions4;
if (voteData4) {
  pollOptions4 = voteData4.map((item) => {
    return (
      <li key={item.id}>
        <button onClick={submitVote4} data-id={item.id}>
          {item.option}
          <span>- {item.votes} Votes</span>
        </button>          
      </li>
    );
  });
}
return (
    <div className="poll">
      <h4>Which Movie do you like the watch?</h4>
      <div style={{display:'flex',alignContent:'center',width:'100%' ,height:'25px'}}>
      <div style={style}>
        <p>Time</p>
        <div>
      <ul className={voted1 ? "results" : "options"}>
        {pollOptions1}
      </ul>
      </div>
        </div>
      <div style={style}>
        <p>20H ---> 21:30H</p>
        <div>
      <ul className={voted2 ? "results" : "options"}>
        {pollOptions2}
      </ul>
      </div>
        </div>

      <div style={style}>
        <p>21:35 ---> 23H</p>
        <div>
      <ul className={voted3 ? "results" : "options"}>
        {pollOptions3}
      </ul>
      </div></div>
      <div style={style}>
        
        <p>23:05 ---> 1H</p>
        <div>
      <ul className={voted4 ? "results" : "options"}>
        {pollOptions4}
      </ul>
      </div></div>

      </div>
      
    
     
    </div>
  );
}
export default MoviePoll;