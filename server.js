const express = require('express');
const http = require('http');
const router = express.Router();
const path = require('path');


const app = express();
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
    res.sendFile(path.join(__dirname+'/public'+'/landing.ejs'));
})

//Ruta al registro de la app
router.get('/registro', function(req,res){
    res.sendFile(path.join(__dirname+'/public'+'/login'+'/registro.html'));
})

//Ruta al login de la app
router.get('/login', function(req,res){
    res.sendFile(path.join(__dirname+'/public'+'/login'+'/login.html'));
})

app.use('/', router);