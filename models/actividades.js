const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: String,
    descripcion: String
});


const model =mongoose.model('Actividades', mySchema);
module.exports=model;