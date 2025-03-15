import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import envConfig from "../config/env.config.js";
import { Request, Response } from "express";
import User from "../models/userModel.js";
export const register = async (req: Request, res: Response) => {
    const { password, ...data } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
        role: data.role || "USER",
    });

    await newUser.save();
    if (!envConfig.JWT_SECRET) {
        return res.status(500).json({ message: "JWT_SECRET is not defined" });
    }
    const token = jwt.sign({ id: newUser._id }, envConfig.JWT_SECRET);
    const { password: userPass, ...newData } = newUser.toObject();

    return res.json({ data: newData, token });
};

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    const isMatching = await bcrypt.compare(password, user.password);

    if (!isMatching) {
        return res.status(400).json({
            message: "Incorrect Password",
        });
    }

    if (!envConfig.JWT_SECRET) {
        return res.status(500).json({ message: "JWT_SECRET is not defined" });
    }
    const token = jwt.sign({ id: user._id }, envConfig.JWT_SECRET);

    const { password: userPass, ...data } = user.toObject();

    return res.json({ data, token });
};

interface ProtectedRouteRequest extends Request {
    user?: any;
}

export const protectedRoute = async (
    req: ProtectedRouteRequest,
    res: Response
) => {
    const user = req.user;

    return res.json({
        message: "Hey, you have accessed the protected route",
        user,
    });
};
