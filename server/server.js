var express = require("express");
var bodyParser = require("body-parser");
const {mongoose} = require("./db/mongoose");
var {items} = require("./models/item")
var {users} = require("./models/user");
var {ObjectID} = require("mongodb")
const _ = require("lodash")
var app = express();
const {account} = require("./controllers/account")
app.use(bodyParser.json())
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});




app.post("/loginExternal",(req,res)=>{

var response = account.loginExternal(req.body);
res.send(response)
   
})


app.listen(3000,()=>{
    console.log("Server is running on port :3000")
})