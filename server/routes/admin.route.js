import { Router } from "express";
import { createMentor, getAllMentors } from "../controllers/admin.controller.js";

import {verifyToken} from "../middlewares/auth.middleware.js";
import {isAdmin} from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const adminRouter =  Router();

adminRouter.post("/create-mentor", 
    verifyToken,
    isAdmin,
    createMentor,
    
)

adminRouter.get(
    "/mentors",
    verifyToken,
    isAdmin,
    getAllMentors
)

adminRouter.post(
    "/create-mentor",
    verifyToken,
    isAdmin,
    upload.single("image"),
    createMentor
)

export default adminRouter;