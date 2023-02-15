import mongoose from "mongoose";

async function connectDB(){

    try{
        await mongoose.connect('mongodb://localhost:27017/f8_nodejs_dev');
        console.log('connect successfully')
    }catch(err){
        console.log('connect fail' + err)
    }
}

export default connectDB