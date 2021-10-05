var express = require('express');
var app = express();
require('dotenv').config();

const mySecret = process.env['MESSAGE_STYLE'];

console.log("Hello World");

//app.get('/', function(req, res) {
  //res.send('Hello Express');
//})

app.get('/',function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

//use of middleware
app.use(express.static(__dirname + '/public/'));
app.use('/public', express.static(__dirname+"/public"));

console.log(mySecret);
app.get("/json", (req, res) => {
    var jsonresponse = {"message": "Hello World"};
  
    if(mySecret === "uppercase"){
      jsonresponse.message = jsonresponse.message.toUpperCase();
    } 
    res.json(jsonresponse);
});
//root middleware function that runs during all paths and returns information about method requested, path and ip 
app.use(function(req, res, next){
    console.log(req.method +" "+ req.path + " - " + req.ip)
    next();
  })




 module.exports = app;
