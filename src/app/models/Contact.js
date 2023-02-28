import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Contact = new Schema({
    name:{type:String,required:true}
},{timestamps:true})

export default mongoose.model('Contact',Contact);