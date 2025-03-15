import { Request, Response } from "express";
import User from "../models/UserModel";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";

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
                    user: user,
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
                user: user,
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
