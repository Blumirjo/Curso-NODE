const express = require('express');
const session = require('express-session');
const app = express();

// configurar modulo express-mysql-session

const MYSQLStore = require('express-mysql-session');
const options = {
    host : 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'prueba_session'
}

const sessionStore = new MYSQLStore(options);
app.use(session({
    key:'cookie_usuario',
    secret: '12345',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}))


// app.use(session({
//     secret:'123456',
//     resave: true,
//     saveUninitialized: true,
// }));

app.get('/',(req, res)=>{
    req.session.usuario = 'Juan Perez';
    req.session.rol = 'Admin';
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
    console.log(req.session);
    res.send(`El usuario <strong>${req.session.usuario}</strong>
       con rol <strong>${req.session.rol}</strong>
       ha visitado esta pagina <strong>${req.session.visitas}</strong>
    `);
})

app.listen(3000, (req, res)=>{
    console.log('SERVER UP!');
})