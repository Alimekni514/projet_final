const express=require("express");
const app =express();
var cors = require('cors');
var http = require('http');
const bodyParser = require("body-parser");
const fs = require("fs");
const { Server } = require("socket.io");
const userRoute=require('./routers/user.route')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/',userRoute);
app.use(bodyParser.json());


// app.listen(4000,()=>console.log("server is running!!!"));
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(4000, () => {
  console.log("SERVER RUNNING");
});

/* poll*/
const pollData1 = require("./data.json");
app.get("/poll1", function (req, res) {
  res.send(pollData1);
});

app.post("/poll1", function (req, res) {  
  if (req.body) {
    fs.writeFileSync("data.json", JSON.stringify(req.body));
    res.send({
      message: "Data Saved",
    });
  } else {
    res.status(400).send({
      message: "Error No Data",
    });
  }
});
const pollData2 = require("./data1.json");
app.get("/poll2", function (req, res) {
  res.send(pollData2);
});

app.post("/poll2", function (req, res) {  
  if (req.body) {
    fs.writeFileSync("data1.json", JSON.stringify(req.body));
    res.send({
      message: "Data Saved",
    });
  } else {
    res.status(400).send({
      message: "Error No Data",
    });
  }
});
const pollData3 = require("./data2.json");
app.get("/poll3", function (req, res) {
  res.send(pollData3);
});

app.post("/poll3", function (req, res) {  
  if (req.body) {
    fs.writeFileSync("data2.json", JSON.stringify(req.body));
    res.send({
      message: "Data Saved",
    });
  } else {
    res.status(400).send({
      message: "Error No Data",
    });
  }
});

const pollData4 = require("./data3.json");
app.get("/poll4", function (req, res) {
  res.send(pollData4);
});

app.post("/poll4", function (req, res) {  
  if (req.body) {
    fs.writeFileSync("data3.json", JSON.stringify(req.body));
    res.send({
      message: "Data Saved",
    });
  } else {
    res.status(400).send({
      message: "Error No Data",
    });
  }
});