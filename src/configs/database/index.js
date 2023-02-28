import mongoose from "mongoose";

async function connectDB(){

    try{
        await mongoose.connect('mongodb://localhost:27017/my_resume');
        console.log('Database connect successfully')
    }catch(err){
        console.log('Database connect fail' + err)
    }
}

export default connectDB