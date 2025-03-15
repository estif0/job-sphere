import { Request, Response } from "express";
import User from "../models/UserModel";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const register = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
        try {
            const { firstName, lastName, email, password } = req.body;

            const userExists = await User.findOne({ email });

            if (userExists) {
                res.status(400);
                throw new Error("user already exists");
            }
            if (!password) {
                res.status(400);
                throw new Error("Password is required");
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const user = await User.create({
                firstName,
                lastName,
                email,
                password: hashedPassword,
            });

            if (user) {
                res.status(201).json({
                    id: user._id,
                    name: user.firstName,
                    email: user.email,
                    token: generateToken(user._id.toString()),
                    message: "User has been created!",
                });
            } else {
                res.status(400).json({
                    error: "Invalid user data.",
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while creating the user.",
                details: error,
            });
        }
    }
);
export const login = asyncHandler(
    async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });

            if (!user) {
                res.status(400);
                throw new Error("Invalid email or password");
            }

            const isPasswordMatch = await bcrypt.compare(
                password,
                user.password
            );

            if (!isPasswordMatch) {
                res.status(400);
                throw new Error("Invalid email or password");
            }

            res.status(200).json({
                id: user._id,
                name: user.firstName,
                email: user.email,
                token: generateToken(user._id.toString()),
                message: "User logged in successfully!",
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: "An error occurred while logging in the user.",
                details: error,
            });
        }
    }
);

interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
    };
}

export const getMe = asyncHandler(
    async (req: AuthenticatedRequest, res: Response): Promise<void> => {
        try {
            if (!req.user) {
                res.status(401);
                throw new Error("Not authorized, no user found");
            }
            const user = await User.findById(req.user.id);

            if (!user) {
                res.status(404);
                throw new Error("User not found");
            }

            const { firstName, email, _id } = user;

            res.status(200).json({
                name: firstName,
                id: _id,
                email: email,
            });
        } catch (error) {
            res.status(500).json({
                details: error,
            });
        }
    }
);

const generateToken = (id: string) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    return jwt.sign({ id }, secret, {
        expiresIn: "15d",
    });
};
