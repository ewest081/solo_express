/**
 * Created by lizwestberg on 1/6/16.
 */


var express = require('express');
var path = require('path');
var app = express();

var balance = require('./modules/balance');

app.use(express.static('static'));

app.get('/', function(request, response){
    console.log(__dirname);

    var ourPath = path.join(__dirname, '../solo_node/index.html');

    console.log('ourPath', ourPath);

    response.sendFile(ourPath);

});

app.get('/balance', function(request, response){
    response.send(balance.money().toString())
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});

