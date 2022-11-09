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
const pollData = require("./data.json");
app.get("/poll", function (req, res) {
  res.send(pollData);
});

app.post("/poll", function (req, res) {  
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

