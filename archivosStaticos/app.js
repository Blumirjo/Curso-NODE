const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/recursos', express.static(__dirname+'/public'));
console.log(__dirname);

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(3000, (req, res)=>{
    console.log('SERVER UP!');
})