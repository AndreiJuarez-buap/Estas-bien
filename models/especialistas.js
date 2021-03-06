const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;
const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: String,
    direccion: String,
    telefono: String,
    mail: { type: String, require: true, unique: true},
    password: {type:String, require: true},
});

mySchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document=this;
        bcrypt.hash(document.password, saltRounds, (err, hashedPassword)=>{
            if(err){
                next(err);
            }else{
                document.password=hashedPassword;
                next();
            }
        });
    }else{
        next();
    }
});



mySchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same) {
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}

const model =mongoose.model('Especialistas', mySchema);
module.exports=model;