import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const BlogCategory = new Schema({
    name:{type:String, required: true},
    image: {type:String, required: false},
    short_desc:{type: String, required: false}
},{collection: 'blog_categories'},{timestamps: true})


export default mongoose.model('BlogCategory',BlogCategory)
