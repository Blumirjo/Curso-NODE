const express = require("express");
const Sequelize = require("sequelize");
const app = express();

//definimos parametros de conexion a la base de datos
const sequelize = new Sequelize('postres_database','root','',{
    host:'localhost',
    dialect:'mysql'
} )

//definimos el modelo
const postresModel = sequelize.define('postres',{
    "id":{type:Sequelize.INTEGER, primaryKey:true},
    "nombre": Sequelize.STRING,
    "calorias": Sequelize.INTEGER
})

sequelize.authenticate()
  .then(()=>{
    console.log('CONEXION A LA BASE DE DATOS OK')
  })
  .catch(error =>{
    console.log('EL ERROR DE CONEXION ES: '+error)
  })

 postresModel.findAll({attributes:['nombre','calorias']})
 .then(postres =>{
    const resultados = JSON.stringify(postres)
    console.log(resultados);
    const resultadosParseados = JSON.parse(resultados);
    console.log(resultadosParseados);
 })
 .catch(error =>{
    console.log(error)
 })


app.listen(3000, ()=>{
    console.log('SERVER UP en http://localhost:3000');
})