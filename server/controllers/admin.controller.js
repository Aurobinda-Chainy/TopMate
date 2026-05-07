import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createMentor = async (req, res) => {
  try {
    const { username, email, password, domain, experience, availability } =
      req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    const existingMentor = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (existingMentor) {
      return res.status(409).json({
        message: "Mentor already exists",
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
      createdBy: req.user.id,
    });

    res.status(201).json({
      message: "Mentor created successfully",
      mentor,
    });
  } catch (error) {
    console.log("Create Mentor Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getAllMentors = async (req, res) => {
  try {
    const mentors = await userModel
      .find({ role: "mentor" })
      .select("-password");

    res.status(200).json({
      message: "Mentors fetched successfully",
      mentors,
    });
  } catch (error) {
    console.log("Get Mentors Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
