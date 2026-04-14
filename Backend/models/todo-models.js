const mongoose = require('mongoose');

const Schema = mongoose.Schema

const TodoSchema = new Schema ({
    Title:{
        type : String,
        required : true,
        minlength: 3,
        trim: true
    },
    Content:{
        type : String,
        required : true,
        minlength: 5,
        trim: true
    },
    Completed:{
        type : Boolean,
        default : false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Todos',TodoSchema)