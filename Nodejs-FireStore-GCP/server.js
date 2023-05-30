var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  
app.use(express.static('public'));

require('./routes/data.routes.js')(app);
require('./routes/company.routes.js')(app);

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })

console.log("Hello world");
