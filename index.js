const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const cons = require('consolidate');
const dust = require('dustjs-helpers');
const pg = require('pg');
const app = express();

//Will add this when database is created. 
// const connect = "postgres://username:password@localhost/database";

//Assign Dusrt Engine to .dust files
app.engine('dust', cons.dust);

//Set Default Ext .dust
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

//Set Public Folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res){
    console.log("Test");
});

//Server
app.listen(5000, function(){
    console.log('Server Stated on Port 5000');
});
