import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"User name is required"],
        unique:[true,"User name must be unique"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email must be unique"]
    },
    password:{
        type: String,
        required:[true, "Password is required"]
    }
})

const userModel = mongoose.model("users",userSchema)

export default userModel;