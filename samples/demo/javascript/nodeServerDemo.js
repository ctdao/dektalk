// Use socket.io JavaScript library for real-time web applications
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/js/lib/adapter.js', function(req, res){
    res.sendFile(__dirname + '/js/lib/adapter.js');
});

app.get('/js/nodeClientDemo.js', function(req, res){
    res.sendFile(__dirname + '/js/nodeClientDemo.js');
});

//app.get('/favicon.ico', function(req, res){
//    res.sendFile(__dirname + '/favicon.ico');
//});

// Let's start managing connections...
io.on('connection', function (socket) {
    // Handle 'message' messages
    socket.on('message', function (message) {
        console.log('S --> got message: ', message);
        // channel-only broadcast...
        socket.broadcast.emit('message', message);
    });

    // Handle 'create or join' messages
    socket.on('create or join', function (room) {
        var numClients = Object.keys(io.sockets.connected).length - 1;


        console.log('S --> Room ' + room + ' has ' + numClients + ' client(s)');
        console.log('S --> Request to create or join room', room);

        // First client joining...
        if (numClients == 0) {
            socket.join(room);
            socket.emit('created', room);
        } else if (numClients == 1) {
            // Second client joining...
            io.sockets.in(room).emit('join', room);
            socket.join(room);
            socket.emit('joined', room);
        } else { // max two clients
            socket.emit('full', room);
        }
    });

    function log() {
        var array = [">>> "];
        for (var i = 0; i < arguments.length; i++) {
            array.push(arguments[i]);
        }
        socket.emit('log', array);
    }
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
