var express = require('express');
var path = require('path');

var app = express();


app.use('/assets',express.static(__dirname + '/assets'));

//for /index page
app.get('/', function(request,response){
	response.sendFile('index.html',{root:path.join(__dirname,'./views')});
});

//for /home page
app.get('/home', function(request,response){
	response.sendFile('home.html',{root:path.join(__dirname,'./views')});
});

//for /about page
app.get('/about', function(request,response){
	response.sendFile('about.html',{root:path.join(__dirname,'./views')});
});

//for /contact page
app.get('/contact', function(request,response){
	response.sendFile('contact.html',{root:path.join(__dirname,'./views')});
});

app.get('/festival', function(request,response){
	response.sendFile('festival.html',{root:path.join(__dirname,'./views')});
});

app.get('/stage', function(request,response){
	response.sendFile('stage.html',{root:path.join(__dirname,'./views')});
});

app.get('/event', function(request,response){
	response.sendFile('event.html',{root:path.join(__dirname,'./views')});
});

app.get('/artist', function(request,response){
	response.sendFile('artists/andi_woelk/index.html',{root:path.join(__dirname,'./views')});
});

app.get('/festivals', function(request,response){
	response.sendFile('festivals.html',{root:path.join(__dirname,'./views')});
});

app.get('/events', function(request,response){
	response.sendFile('events.html',{root:path.join(__dirname,'./views')});
});

app.get('/artists', function(request,response){
	response.sendFile('artists/index.html',{root:path.join(__dirname,'./views')});
});

app.listen(3000,function(){
	console.log('Listening at port 3000...');
});

module.exports = app;