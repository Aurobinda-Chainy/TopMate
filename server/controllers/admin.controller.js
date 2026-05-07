import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createMentor = async (req, res) =>{
    try{
        console.log("BODY:",req.body);
        console.log("FILE:",req.file);
        
        const {
            username,
            email,
            password,
            domain,
            experience,
            availability
        } = req.body;

        const image = req.file ? req.file.filename : null;

        const existingUser = await userModel.findOne( {email} );

        if(existingUser){
            return res.status(400).json({
                message: "User already exists with this email",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const mentor = await userModel.create({
            username,
            email,
            password: hashedPassword,
            role: "mentor",
            domain,
            experience,
            availability,
            image,
            createdBy: req.user?._id,
        });

        return res.status(201).json({
            message: "Mentor created successfully",
            mentor,
        })
    }catch(error){
        console.log("Create Mentor Error:",error);
        return res.status(500).json({
            message:"Interval Server Error",
        })
    }
}


export const getAllMentors = async (req, res)=>{
    try{
        const mentors = await userModel.find({ role: "mentor" }).select("-password");

        res.status(200).json({
            message: "Mentors fetched successfully",
            mentors,
        })
    } catch (error){
        console.log("Get Mentors Error:",error);
        res.status(500).json({
            message:"Internal Server Error",
        });
    }
};