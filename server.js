var http = require('http');
var path = require("path");
var express = require('express');
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/public"));

// set up handlebars view engine
var handlebars = require('express3-handlebars')
    .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 5000);

// database configuration
var mongoose = require('mongoose');

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found')
});

app.use(function(err,req,res,next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
    console.log('Express started ')
});