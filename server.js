var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var next = require('next');

//next setup
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

//routes

// variables
var users = 0;
var history = {};

//socket
io.on('connection', (socket) => {
    users++;
    console.log('user joined (active users'+ users +')');

    //listeners
    socket.on('sendMessage', (messageData) => {
            socket.broadcast.to(socket.room).emit('sendMessage', messageData);
            if(history[socket.room]){
                history[socket.room].push(messageData);
            }
    });
    socket.on('joinRoom', (roomData) => {
        socket.join(roomData.room);
        socket.room = roomData.room;
        if(!history[socket.room]){
          history[socket.room] = [];
        }

        socket.broadcast.to(socket.room).emit('sendMessage', {type:'user', message:'User Joined'});
        if (io.sockets.adapter.rooms[socket.room]) {
          io.to(socket.room).emit('users', {userAmount: io.sockets.adapter.rooms[socket.room].length }); 
        }
        io.to(socket.room).emit('history', {list: history[socket.room] }); 
    });

    socket.on('disconnect', () => {
        users--;
        console.log('user disconnected (active users'+ users +')');
        if (io.sockets.adapter.rooms[socket.room]) {
            io.to(socket.room).emit('users', {userAmount: io.sockets.adapter.rooms[socket.room].length});
        }
        io.to(socket.room).emit('sendMessage', {type:'user', message:'User Disconnected'});
    });

  });

//server
nextApp.prepare().then(() => {

    app.get('/room/:pass', (req, res) => {
        return nextHandler(req, res, '/', { pass: req.params.pass });
    })

    app.get('*', (req,res) => {
        return nextHandler(req,res);
    })

    http.listen(3002, () => {
        console.log('listening on *:3002');
    });

});