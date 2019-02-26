var http = require('http');
var express = require('express');
var app = express();

// view engine 
app.set('view engine', "vash");

// controllers & routes 
var controlers = require('./controllers');
controlers.init(app);

// new up server 
var server = http.createServer(app);

// listen on 3000
server.listen(3000);