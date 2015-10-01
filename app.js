var app = require ('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var express = require('express');
var request = require('request');
var path = require('path');
var port = process.env.PORT || 8080

var MAX_PLAYERS = 4;
var numOfPlayers = 0;

/*
var mysql      = require('mysql');
 var connection = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : '',
   port     : '3307',
   database : 'riskdb',
   socket   : 'tmp/mysql.sock' // don't know where the rest of the path is
 });
 connection.connect();
/*
 connection.query('SELECT * from employees', function(err, rows, fields) {
   if (!err)
     console.log('The solution is: ', rows);
   else
     console.log('Error while performing Query.');
     console.log(err);
 });
 connection.end();
*/

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/main', function(req, res){

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/game', function(req, res){

    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

function initialize() {
    server.listen(port);
    //var host = server.address().address;
    //var port = server.address().port;

    //console.log('Application started at http://%s:%s', host, port);
}

initialize();

io.on('connection', function(socket) {
    console.log("A connection established");

    socket.on('zap', function(data) {
        console.log('zapped');
        console.log(data);
        //io.emit('zapper');
    });

    socket.on('playerentry', function(data){
        if (numOfPlayers < MAX_PLAYERS){
            console.log(data)
            numOfPlayers+=1;
        }
    });

});