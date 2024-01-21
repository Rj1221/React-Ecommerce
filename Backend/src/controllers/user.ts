import User from "../models/user.js";
import { Request, Response, NextFunction } from "express";
import { RegisterUserBody } from "../types/types.js";
export const register = async (
  req: Request<{}, {}, RegisterUserBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, photo, gender, dob, _id } = req.body;
    const user = await User.create({
      name,
      email,
      photo,
      gender,
      dob: new Date(dob),
      _id,
    });
    return res.status(201).json({
      success: true,
      message: `User with id ${user.name} created successfully`,
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
