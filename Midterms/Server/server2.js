var express = require('express');
var app = express();

app.get('/', function (req, res){
    res.send('You have seccuessfully created your second app!0');
})

var server = app.listen(2005, function(){
    var host =server.address().address
    var port = server.address().port

    console.log("example app listening at http://%s:%s", host, port)
})