const express = require('express');
const app = express();
const path = require('path');
const http = require('http'); //config D server Q definimos Express
const socketIO = require('socket.io');
let server = http.createServer(app); //servidor para la app
//servidor montado con toda la configuracion de

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//init socket.io; IO = es la comunicacion del backend 
module.exports.io = socketIO(server);
require('./socket/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});