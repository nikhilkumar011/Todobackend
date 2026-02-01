const mongoose = require('mongoose');

const schema = mongoose.Schema;

const todoSchema = new schema({
    todoname:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:false
    }
})

module.exports = mongoose.model('todo',todoSchema);