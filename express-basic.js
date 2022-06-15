var express = require('express');

var app = express();

app.get('/', function(peticion, respuesta){
    respuesta.send('Ruta INICIO')
});

app.get('/contacto', function(peticion, respuesta){
    respuesta.send('Ruta CONTACTO')
});

app.listen(3000, function(peticion, respuesta){
    console.log("Hola Mundo");
})

