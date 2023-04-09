import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Service = new Schema({
    title:{type:String,required: true},
    short_desc:{type:String,required: false},
    image: {type:String, required: false}
},{collection:'services'},{timestamps: true})


export default mongoose.model('Service',Service);