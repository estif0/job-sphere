import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/UserModel";

interface AuthenticatedRequest extends Request {
    user?: any;
}

const protect = asyncHandler(
    async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        let token: string = "";

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            try {
                // Get token from header
                token = req.headers.authorization.split(" ")[1];

                // Verify token
                const decoded: any = jwt.verify(
                    token,
                    process.env.JWT_SECRET as string
                );

                // Get user from the token
                req.user = await User.findById(decoded.id).select("-password");

                next();
            } catch (error) {
                console.error(error);
                res.status(401);
                throw new Error("Not authorized");
            }
        }

        if (!token) {
            res.status(401);
            throw new Error("Not authorized, no token");
        }
    }
);

export { protect };
