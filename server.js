const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
//--------> Server property define via socket.io
const {Server} = require('socket.io');
//--------> Create Socket.io Server
const io = new Server(expressServer);
const path = require('path')
const port = 5000;
app.use(express.static('client-app/build'));

// --------> Path resolving
app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'client-app', 'build', 'index.html'))
})



//--------> Server running port define
expressServer.listen(port, function(){
    console.log(`Server Run @${port}`);
})