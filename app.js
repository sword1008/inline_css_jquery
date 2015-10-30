var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
var http = require('http'),
    fs = require('fs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname+'/path/demo-index.html'))
});

app.get('/demo-frame.html', function(req, res) {
    res.sendfile(path.join(__dirname+'/path/demo-frame.html'))
});

app.get('/jquery.inlineStyler.min.js', function(req, res){
    res.sendfile(path.join(__dirname+'/path/jquery.inlineStyler.min.js'))
});

app.post('/postContent', function(req, res){
    var content= req.body.after;
    fs = require('fs')
    fs.readFile('./path/script.html', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        var result = content + data;
        console.log('content:' + req.body.after);
        res.send(result);
    });

});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
