// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// //mysql
// var mysql = require('mysql');

// //conexion a MySQL

// var conexion = mysql.createConnection({
//   host: 'localhost',
//   database: 'prueba1',
//   user: 'root',
//   password: ''
// });

// conexion.connect(function(error){
//     if(error){
//            throw error;
//     }else{
//       console.log('CONEXION EXITOSA')
//     }
// });


// //consulta SQL



// app.get('/', function(peticion, respuesta){
//   respuesta.send(
//     conexion.query('SELECT * from users', function(error, results, fields){
//       if(error){
//         throw error; 
//       }else{
//       results.map(result =>{
//         console.log(result);
//       }); 
//     }
     
//     })
//   )
// });



// conexion.end();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// app.listen(3000, function(peticion, respuesta){
//   console.log("Hola Mundo");
// })

// module.exports = app;

var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('¡Hello world!');
});

app.get('/contacto', function(req,res){
    res.send('Seccion CONTACTO')
})

app.listen(3000,function(){
    console.log('ok')
})
