import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const verifyToken = (req, res, next) =>{
    try{
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                message: "Access token missing",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, config.JWT_SECRET);

        req.user = decoded;
        
        next();
    }catch(error){
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};

export const isAdmin = (req,res,next) =>{
    try{
        if(req.user.role != "admin"){
            return res.status(403).json({
                message: "Access denied. Admin only",
            });
        }

        next();
    }catch(error){
        return res.status(500).json({
            message: "Error in admin check",
        });
    }
};