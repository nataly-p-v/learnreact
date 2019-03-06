var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello world!');
}).listen(3001);

console.log('waiting for requests');
