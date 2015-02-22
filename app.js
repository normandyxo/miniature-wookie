var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.get('/', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function (socket) {
    console.log('User connected.');

    socket.on('disconnect', function () {
        console.log('User disconnected.');
    });

    socket.on('chat:message', function (msg) {

        // relay the message to all the users
        io.emit('chat:message', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});