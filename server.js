const express = require('express');
const http = require('http');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const db=require('mongoose');
const User = require('./models/usuario');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const url = require('url');

const saltRounds = 10;

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

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + 'login'));

app.set('port', process.env.PORT || 3000);


server.listen(app.get('port'), ()=>{
    console.log("Servidor en puerto 3000");
});


//Rutas del servidor

//Ruta al Landing Page
router.get('/', function(req,res){
    //res.sendFile(path.join(__dirname+'/public'+'/landing.html'));
    res.render('landing');
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
    const token = bcrypt.hashSync(mail, saltRounds);
    const user = new User ({mail, password, emailToken: token, isVerified: false});
    user.save(err =>{
        if(err){
            res.status(500).send('Error al registrar usuario');
        }else{
            //Variable de transporte de email
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth:{
                    user: 'andrei.juarez.cc@gmail.com',
                    pass: 'owyifkhiaprldboe'
                },
            });
            //diseño de correo electronico a usuario nuevo
            var mailOptions={
                from : 'Team Estas-bien',
                to : user.mail,
                subject: 'Correo de Verificación',
                text: "Para mantener tu la seguridad de tu informacion, te pedimos verificar tu cuenta con el siguiente enlace, da clic para verificar la cuenta",
                html: '<a href="https://estas-bien-prueba.herokuapp.com/verifica-email?token='+user.emailToken+'">Verifica tu Correo</a>'
            }
            //envio de correo electronico
            transporter.sendMail(mailOptions, (err,info)=>{
                if(err){
                    res.status(500).send(err.message);
                }else{
                    console.log("mail enviado");
                    res.status(200).jsonp(req.body);
                }
            });
            res.status(200).send('Usuario Registrado');
        }
    });
})

//Ruta para la verificacion del correo electronico
router.get('/verifica-email', (req,res)=>{
    User.findOne({emailToken: req.query.token}, (err, user)=>{
        if(!user){
            res.status(500).send('No existe el usuario');
        }else{
            user.emailToken=null;
            user.isVerified=true;
            user.save(err =>{
                if(err){
                    res.status(500).send('Error al registrar usuario');
                }else{
                    res.status(200).send('Usuario Registrado');
                }
            });
        }
    });
});

//Post para el login
router.post('/home', (req,res)=>{
    const{mail, password} = req.body;
    User.findOne({mail}, (err,user)=>{
        if(err){
            res.status(500).send('Error al autenticar al usuario');
        }else if(!user){
            res.status(500).send('No existe el usuario');
        }else if(user.isVerified===false){
            res.status(500).send('No ha verificado su correo electronico');
        }else{
            user.isCorrectPassword(password, (err, result)=>{
                if(err){
                    res.status(500).send('Error al autenticar al usuario');
                }else if(result){
                    res.status(200).send('Usuario Autenticado Correctamente'+user._id);
                    console.log("Usuario: "+ user.mail);
                }else{
                    res.status(500).send('Usuario y/o Contraseña Incorrecta');
                }
            });
        }
    });
});



router.get("*", function (req,res){
    res.send("404 not found");
})

app.use('/', router);