import { Request, Response, NextFunction } from "express";

interface ErrorResponse {
    message: string;
    stack?: string;
}

const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    const response: ErrorResponse = {
        message: err.message,
    };

    // Include stack trace in development
    if (process.env.NODE_ENV === "development") {
        response.stack = err.stack;
    }

    // Log the error
    console.error(err);

    res.status(statusCode).json(response);
};

export default errorHandler;
