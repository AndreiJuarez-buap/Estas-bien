const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    mail: { type: String, require: true, unique: true},
    password: {type:String, require: true}
});

const model =mongoose.model('Usuarios', mySchema);
module.exports=model;