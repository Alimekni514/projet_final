const routeModel = require("../models/user.model");
const route = require("express").Router();

route.post("/register",(req,res)=> {
    routeModel.register(req.body.username,req.body.email,req.body.password)
    .then((user)=>res.status(200).json({util:user,msg:"registred!!!"}))
    .catch((err)=>res.json({error:err}));
})
route.post("/login", (req, res) => {
    routeModel
      .login(req.body.email, req.body.password)
      .then((token) => res.status(200).json({ token: token }))
      .catch((err) => res.status(400).json({ error: err }));
    });
module.exports = route;