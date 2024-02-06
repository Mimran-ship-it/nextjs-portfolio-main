import mongoose from "mongoose";
const Schemas=new mongoose.Schema({
    email:{type:'String', required:true},
    subject:{type:'String', required:true},
    message:{type:'String', required:true},

}) 
mongoose.models={}
const contactinfo=mongoose.model('Contactinfo',Schemas)
export default contactinfo;