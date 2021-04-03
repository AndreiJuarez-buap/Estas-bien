const express = require('express');
const http = require('http');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const db=require('mongoose');
const User = require('./models/usuario');

//Conexion a la base de datos

const mongo_uri="mongodb+srv://admin:admin@cluster0.uxvyt.mongodb.net/Project_0?retryWrites=true&w=majority";

db.connect(mongo_uri,{useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex: true}, function(err){
    if(err){
        throw err;
    }else{
        console.log("Conexion establecida")
    }
});


//Creacion del servidor express

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const server = http.createServer(app);
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + 'login'));

app.set('port', process.env.PORT || 3000);


server.listen(app.get('port'), ()=>{
    console.log("Servidor en puerto 3000");
});

/*app.listen(3000, ()=>{
    console.log("Servidor en puerto 3000");
});*/


//Rutas del servidor

//Ruta al Landing Page
router.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/public'+'/landing.html'));
})

//Ruta al registro de la app
router.get('/registro', function(req,res){
    res.sendFile(path.join(__dirname+'/public'+'/login'+'/registro.html'));
})

//Ruta al login de la app
router.get('/login', function(req,res){
    res.sendFile(path.join(__dirname+'/public'+'/login'+'/login.html'));
})

//Metodos POST
//POST para el registro
router.post('/registrarse', (req,res)=>{
    const{mail,password}=req.body;
    const user = new User ({mail, password});
    user.save(err =>{
        if(err){
            res.status(500).send('Error al registrar usuario');
        }else{
            res.status(200).send('Usuario Registrado');
        }
    });
})



router.get("*", function (req,res){
    res.send("404 not found");
})

app.use('/', router);