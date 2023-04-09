import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Setting = new Schema({
    web_name:{type:String, required:true},
    base_url:{type:String},
    logo:{type:String},
    banner_img:{type:String},
},{collection: 'settings'},{timestamps:true});

export default mongoose.model('Setting',Setting);
