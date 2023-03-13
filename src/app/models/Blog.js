import mongoose, { model } from "mongoose";

const Schema =mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Blog = new Schema({
    title:{type:String, required:true},
    image:{type:String},
    short_desc:{type:String},
    content:{type:String},
    category_id:{type:String,required:false}
});

export default mongoose.model("Blog",Blog);