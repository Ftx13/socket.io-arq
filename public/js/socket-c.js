var socket = io();
//escuchar acciones
socket.on('connect', function() {

    console.log('Servidor: Usuario conectado.');
    socket.on('disconnect', function() {
        console.log('Servidor: Se perdio la conexion.');

    });

    //enviar informacion(nombre del evento,objeto,callbak)
    socket.emit('enviarMensaje', {
        usuario: 'Fito',
        mensaje: 'Hola mundo'
    }, function(resp) {
        console.log('resp Server: ', resp);

    });
    //escuchar info
    socket.on('enviarMensaje', function(mensaje) {
        console.log('Servidor: ', mensaje);

    });
});