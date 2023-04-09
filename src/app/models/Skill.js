import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Skill = new Schema({
    name:{type:String, required:true},
    image:{type:String},
    short_desc:{type:String},
    description:{type:String},
    point:{type:Number, requird:true}// diem so, danh gia trinh do dc bao nhieu
},{collection: 'skills'},{timestamps:true});

export default mongoose.model('Skill',Skill);
