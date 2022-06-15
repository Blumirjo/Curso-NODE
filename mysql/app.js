var mysql = require('mysql');


var conexion = mysql.createConnection({
host:'localhost',
database: 'prueba1',
user:'root',
password:''   
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('conexion exitosa')
    }
});

//metodos CRUD

//mostrar

conexion.query('SELECT * from users', function(error,results,fields){
    if(error)
    throw error;



    results.forEach(result => {
        console.log(result);
    });



})



//insertar

// conexion.query("INSERT into users (nombre, apellido) values ('adam','smith')", function(error, results){
//     if(error) throw error;
//     console.log('Registro agregado', results);
// })

//actualizar

conexion.query('UPDATE users set nombre = "Steve",apellido = "Rogers" where id=1', function(error, results){
if(error) throw error;
console.log('registro actualizado ', results);
})

//eliminar

conexion.query('DELETE FROM users where id=2', function(error, results){
   if(error) throw error;
   console.log('registro eliminado', results )
});



conexion.end(); 

