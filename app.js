//jshint esversion:6

const express= require("express");
const bodyParser= require("body-parser");
var ejs = require('ejs');
var http = require('http');

const app= express();
const abc = "HI";
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {listTitle: abc})
    
});

app.listen(3000, function(){
        console.log("Server started on port 3000");
});