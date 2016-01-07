/**
 * Created by joelmiller on 1/6/16.
 */
console.log('Hello Express!');

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response){
	console.log(__dirname);

	var ourPath = path.join(__dirname, '../public/views/index.html');

	console.log('ourPath', ourPath);

	response.sendFile(ourPath);

});

app.post('/addUser', function(request, response){
	response.send('You made a POST request!');
});

app.put('/updateUserInfo', function(request, response){
	response.send('You made a PUT request!');
});

app.delete('/removeUser', function(request, response){
	response.send('You made a DELETE request!');
});

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listening on port', port);
});

