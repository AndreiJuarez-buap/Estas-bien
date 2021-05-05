const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    Descripcion: String,
    isVerified: Boolean
});


const model =mongoose.model('Actividades', mySchema);
module.exports=model;