import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Contact = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,trim:true},
    phone:{type:String,required:false, trim:true},
    title:{type:String,required:true},
    message:{type:String,required:true},
    is_active:{type:Number,required:false, default:0}
},{timestamps:true});

export default mongoose.model('Contact',Contact);

