var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

var route = require('./route');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('', route);

app.listen(3000, (err) => {
    if(err){
        console.log(err);
    }
    console.log("server running on port 3000");
});