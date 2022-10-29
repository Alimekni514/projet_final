const express=require("express");
const app =express();
var cors = require('cors');
const userRoute=require('./routers/user.route')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/',userRoute);


app.listen(4000,()=>console.log("server is running!!!"));
