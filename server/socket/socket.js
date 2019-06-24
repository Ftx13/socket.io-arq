const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Cliente: conectado.');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Conectado.'
    });

    client.on('disconnect', () => {
        console.log('Cliente: desconctado.');

    });

    //escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         res: 'TODO FINE'
        //     });
        // } else {
        //     callback({
        //         res: 'TODO PENDEJO'
        //     });
        // }
    })
});