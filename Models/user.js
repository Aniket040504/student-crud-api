const { Timestamp } = require('bson');
const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    marks:{
        type:Number,
    }
},
{timestamps:true});


const User=mongoose.model("prac_s",userSchema);

module.exports=User;