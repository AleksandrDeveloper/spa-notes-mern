const {Schema,model} = require('mongoose');

const Note = new Schema({
    title:{
        required:true,
        type:String
    },
    text:String,
    date:Date,
    color:String
})


module.exports = model('Note',Note)