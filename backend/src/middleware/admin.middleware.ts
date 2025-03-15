import { Request, Response, NextFunction } from "express";

interface User {
    role: string;
}

interface AdminRequest extends Request {
    user: User;
}

export const protectAdmin = (
    req: AdminRequest,
    res: Response,
    next: NextFunction
): Promise<void> => {
    return new Promise((resolve, reject) => {
        const user = req.user;

        if (user.role === "ADMIN") {
            next();
            resolve();
        } else {
            res.status(403).json({
                message: "Forbidden",
            });
            resolve();
        }
    });
};
