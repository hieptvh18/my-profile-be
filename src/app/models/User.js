import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    name:{type:String, required: true, trim: true},
    avatar:{type:String, required: false, trim: true},
    age:{type:Number, required: false},
    email:{type:String, required: true},
    password:{type:String, required: false},
    phone:{type:String, required: false,max:11},
    address:{type:String, required: false},
    cv:{type:String, required: false},
    social_link:{type:Object, required:false},// save type json: example({facebook: 'https://facebook.com/tvhh',...})
    tokens:{type:String}
},{collection:'users'},{timestamps:true});

export default mongoose.model('User',User);
