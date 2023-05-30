
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8082 // 9091;
var config = require('config'); //we load the db location from the JSON files
var cors = require('cors');
var jwt = require('jsonwebtoken');
process.env.NODE_ENV = 'production';
//db options

async function run(){
	//db connection      
	await mongoose.connect(config.DBHost);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
}



run();
//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
	//use morgan to log at command line
	app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}


app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
next();
});

//app.set('superSecret', config.secret); // secret variable

 
//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
app.use(express.static('public'));

require('./routes/company.routes.js')(app);
require('./routes/candidate.routes.js')(app);
app.listen(port);
console.log("Listening on port " + port);
console.log('env is' + process.env.NODE_ENV);

module.exports = app; // for testing