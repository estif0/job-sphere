import jwt from "jsonwebtoken";
import envConfig from "../config/env.config.js";
import User from "../models/userModel";
import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
    user?: any;
}

interface DecodedToken {
    id: string;
}

export const authenticate = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    try {
        const authorizationHeader = req.headers["authorization"];

        if (!authorizationHeader) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const token = authorizationHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!envConfig.JWT_SECRET) {
            return res
                .status(500)
                .json({ message: "JWT Secret is not defined" });
        }

        let decoded: DecodedToken;
        try {
            decoded = jwt.verify(token, envConfig.JWT_SECRET) as DecodedToken;
        } catch (error) {
            return res.status(400).json({ message: "Invalid Token" });
        }

        const userId = decoded.id;

        let user;
        try {
            user = await User.findOne({ _id: userId });
        } catch (error) {
            return res.status(500).json({ message: "Error fetching user" });
        }

        if (!user) {
            return res.status(400).json({
                message: "User not found",
            });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
