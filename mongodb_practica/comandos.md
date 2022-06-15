bse de datos -> colecciones -> documentos -> json

CRUD (create- read - update - delete)

- show dbs

  Nos permite mostrar las bases de datos existentes.
 
- use basededatos1

   En caso de que la db "basededatos1" exista, se pondra a nuestra disposicion, 
   en caso de que no exista la creara y la pondra a nuestra disposicion.

- db.coleccion1.insert({"clave":"valor"})

   El "db." hace referencia a db recien creada, o en otro caso seleccionado, 
   el nombre de la coleccion a crearse coleccion1, seguido el metodo '.insert({"clave":"valor"})', 
   para agregar un nuevo documento.


- db.dropDatabase()

  Nos permite borrar una base de datos.


  Hay dos formas de insertar colecciones en la base de datos.

  - db.createCollection("coleccion1")

  es es una manera de agregar una collecion, la forma es la mencionada antes...

  -db.collecion1.insert({"nombre":"Juan", "edad":32})

  de ambas maneras generamos las colleciiones. y al escribir show collections podemos ver todas las colecciones.

  -db.coleccion1.drop()

  para eliminar una coleccion.

  -db.coleccion2.renameCollection("personas")

  De esa forma cambiamos el nombre de la coleccion de "coleccion2" a "personas".


  prueba = {
... "name": "Prueba", "origin": "antartica", "age": 30}

Al dar enter se vera este resultado: 

{ "name" : "Prueba", "origin" : "antartica", "age" : 30 }

Y luego solo se hace el insert y ya, se gurdara el Json


> db.personas.insert(prueba)

y listo, insertado ahora veamos que tenemos dentro

- db.personas.find()

Nos va amostrar que hay dentro de esta coleccion.
  

-b.personas.find().pretty()

agregando la funcion pretty, obtendremos el json en un mejor formato

{
        "_id" : ObjectId("62a7aaa4bd0b8b3896b36d83"),
        "name" : "Prueba",
        "origin" : "antartica",
        "age" : 30
}

el campo _id es generado automaticamente por MONGODB


de esta forma se pueden insertar varios documentos al mismo tiempo


db.clientes.insert([{
    "nombre":"Ermenejilda",
    "email": "Erme@gmail.com",
    "oficio": "puta",
    "edad": 31
},
{
    "nombre":"martina",
    "email": "marr@gmail.com",
    "oficio": "falopera",
    "edad": 40
},
{
    "nombre":"Juan",
    "email": "juan@gmail.com",
    "oficio": "carpintero",
    "edad": 34
},
{
    "nombre":"Jose",
    "email": "jose@gmail.com",
    "oficio": "transa",
    "edad": 45
},
{
    "nombre":"Carolina",
    "email": "carolina@gmail.com",
    "oficio": "abogada",
    "edad": 29
},
{
    "nombre":"Maria",
    "email": "maria@gmail.com",
    "oficio": "kioskera",
    "edad": 23
}])


y asi podemos obtener la cantidad de documentos de una coleccion...

- db.clientes.count()

nos veulve la cantidad de documentos de la coleccion.

 Modificar los documentos de una coleccion:

 - db.productos.update({claveValor a modificar},{clave + nuevo valor})

 aqui pareciera qeu va a modificar la propiedad descripcion, pero en realidad va a eliminar todos los demas
 datos y solo dejara descripcion editado.

{
        "_id" : ObjectId("62a7c0f0009d1ec17116cfa3"),
        "descripcion" : "arroz",
        "marca" : "gallo",
        "cantidad" : 40
}


 db.productos.update({descripcion:"arroz"},{descripcion: "sorete"})

 conviertiendolo en esto:

 {
        "_id" : ObjectId("62a7c0f0009d1ec17116cfa3"),
        "descripcion" : "sorete"
}

para que esto no suceda debemos utilizar $set

db.productos.update({descripcion:"arroz"},{$set:{descripcion: "sorbete"}})



{
        "_id" : ObjectId("62a7c0f0009d1ec17116cfa3"),
        "descripcion" : "sorbete",
        "marca" : "gallo",
        "cantidad" : 40
}

y de esa forma podemos lograr lo buscado.
Tambien se puede utilizar la misma sintaxis para crear nuevos datos

db.productos.update({descripcion:"sorbete"},{$set:{cantidad: 2}


si queremos obtener solo una parte de la informacion:

db.clientes.find(null,{oficio:1})

obtendriamos esto: 

{ "_id" : ObjectId("62a7bceb009d1ec17116cf9b"), "oficio" : "puta" }
{ "_id" : ObjectId("62a7bceb009d1ec17116cf9c"), "oficio" : "falopera" }
{ "_id" : ObjectId("62a7bceb009d1ec17116cf9d"), "oficio" : "carpintero" }
{ "_id" : ObjectId("62a7bceb009d1ec17116cf9e"), "oficio" : "transa" }
{ "_id" : ObjectId("62a7bceb009d1ec17116cf9f"), "oficio" : "abogada" }
{ "_id" : ObjectId("62a7bceb009d1ec17116cfa0"), "oficio" : "kioskera" }

si quisieramos que no nos devuelva la propiedad _id, la expluimos de la siguiente forma

db.clientes.find(null,{oficio:1,_id:0})   
{ "oficio" : "puta" }
{ "oficio" : "falopera" }
{ "oficio" : "carpintero" }
{ "oficio" : "transa" }
{ "oficio" : "abogada" }
{ "oficio" : "kioskera" }

si quiseramos obtener la edad de cada clente y ordenarla de menor a mayor?

db.clientes.find(null,{edad:1,_id:0}).sort({edad:1})  
{ "edad" : 23 }
{ "edad" : 29 }
{ "edad" : 31 }
{ "edad" : 34 }
{ "edad" : 40 }
{ "edad" : 45 }

si quisieramos que sea de mayor a menor cambiamos el 1 por -1

db.clientes.find(null,{edad:1,_id:0}).sort({edad:-1})  
{ "edad" : 45 }
{ "edad" : 40 }
{ "edad" : 34 }
{ "edad" : 31 }
{ "edad" : 29 }
{ "edad" : 23 }

obtenienedo ese resultado.

Pero ademas podemos utilizar metodos como forEach

db.clientes.find().forEach(cliente => print("Cuenta de email:  " + cliente.email))
Cuenta de email:  Erme@gmail.com
Cuenta de email:  marr@gmail.com
Cuenta de email:  juan@gmail.com
Cuenta de email:  jose@gmail.com
Cuenta de email:  carolina@gmail.com
Cuenta de email:  maria@gmail.com

pudiendo alcanzar informacion especifica  y ademas trabajarla.

