var express = require("express");
var path = require('path');
var app = express();

app.listen(process.env.PORT,process.env.IP);
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
  res.redirect("/w3.css");
});
app.get("/w3.css",function(req,res){
  res.sendfile(path.join(__dirname +"/w3.css"));
});
app.get("/world-110m2.json",function(req,res){
  res.sendfile(path.join(__dirname +"/world-110m2.json"));
});