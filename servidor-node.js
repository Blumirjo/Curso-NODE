//ejemplo de modulo http, bajo la arquitectura cliente servidor:
var http = require('http'); 
//diciendo a node que necesitamos el modulo http

var servidor = http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
    respuesta.write('<h3>SERVER BASICO CON NODE-JS</h3>');
    console.log('peticion web');
    respuesta.end()
});

servidor.listen(3000);
console.log('Ejecutando un server local con node-js');