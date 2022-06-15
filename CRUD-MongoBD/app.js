const mongoose = require('mongoose');
const url = 'mongodb://localhost/mongo1_curso'

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
 // useFindAndModify: false,
 // useCreateIndex: true
})
.then(()=> console.log('CONECTADO A MONGO'))
.catch((e)=> console.log('El error de conexion es: '+ e));

const personaSchema = mongoose.Schema({
    nombre:String,
    edad:Number,
    pais:String
},{versionKey:false})

const  PersonaModel = mongoose.model("personas", personaSchema);

//funciones CRUD

//mostrar

const mostrar = async ()=>{
    const personas = await PersonaModel.find()
    console.log(personas);
}

//crear

const crear = async ()=>{
    const persona = new PersonaModel({
        nombre:'Roberto',
        edad: 93,
        pais:'Argentina'
    })
    const resultado = await persona.save();
    console.log(resultado);
}


//llamamos a los procedimientos
//mostrar()
// crear();
// {
//     nombre: 'Pedro',
//     edad: 39,
//     pais: 'Argentina',
//     _id: new ObjectId("62a8f4df667b5c2be46c77f4"),
//     __v: 0
//   }

//como eliminar la propiedad __v, agregando {versionKey:false} al Schema, evitamos esa propiedad

//actualizar

const actualizar = async (id)=>{
    const persona = await PersonaModel.updateOne({_id:id},
    {
      $set:{
        nombre: "Roberto MODIFICADO",
        pais:"ARGENCHINO"
      }
    })
}

//actualizar('62a8f5fbdfa16469dc017529')

//borrar

const eliminar = async (id) => {
  const persona = await PersonaModel.deleteOne({_id:id});
  console.log(persona);
};

eliminar('62a8f5fbdfa16469dc017529');



