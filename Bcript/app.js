const express = require('express');
const app = express();

const bcryptjs = require('bcryptjs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.post('/login', async (req, res)=>{
    //datos que vamos a cargar a postman
    const user = req.body.user;
    const password = req.body.password;
    //comporbamos que sean los datos correctos
    if(user == "admin" && password == "12345"){
        //opcion sincrona
        // let passwordHash = bcryptjs.hashSync(password, 9);
        let passwordHash = await bcryptjs.hash(password, 8);
        res.json({
          message: 'AUTENTICACION CORRECTA',
          passwordHash: passwordHash
        });
    }else{
        res.json({
            message: 'INGRESE CREDENCIALES CORRECTAS'
        })
    }
});

app.get('/compare',(req,res)=>{
    let hashSaved = '$2a$08$B5WbdFONPDP88x8RiTO7YuMuGB/A5VGjFHsoiPLJs7S0VYdICyFT2';
    let compare = bcryptjs.compareSync('12345', hashSaved);
    if(compare){
        res.json('OK');
    }else{
        res.json('no son iguales');
    }
})

app.listen(3000, ()=>{
    console.log('SERVER UP!');
})