var http = require('http');
var express=require('express');
var port = process.env.port || 8081;
var app= express();
var appRoutes=require('./routes/appRoutes');
var bankAppRoutes=require('./routes/bankappRoutes');
var mongoose =require('mongoose');
var bodyParser=require('body-parser');
var cors=require('cors');


mongoose.connect('mongodb://localhost/bankDB',{useUnifiedTopology:true,useNewUrlParser:true});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/bankaccounts',appRoutes);
app.use('/banks',bankAppRoutes);
http.createServer(app).listen(port);
console.log("Backend Running on Port :",port );