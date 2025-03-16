import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateJob = [
    body("logo")
        .isString()
        .notEmpty()
        .withMessage("Logo is required and must be a string"),
    body("title")
        .isString()
        .notEmpty()
        .withMessage("Title is required and must be a string"),
    body("company")
        .isString()
        .notEmpty()
        .withMessage("Company is required and must be a string"),
    body("location")
        .isString()
        .notEmpty()
        .withMessage("Location is required and must be a string"),
    body("duration")
        .isString()
        .notEmpty()
        .withMessage("Duration is required and must be a string"),
    body("salaryMin")
        .isNumeric()
        .notEmpty()
        .withMessage("Minimum salary is required and must be a number"),
    body("salaryMax")
        .isNumeric()
        .notEmpty()
        .withMessage("Maximum salary is required and must be a number"),
    body("description")
        .isString()
        .notEmpty()
        .withMessage("Description is required and must be a string"),
    body("experience")
        .isString()
        .notEmpty()
        .withMessage("Experience is required and must be a string"),
];

export const handleValidationErrors = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    } else {
        next();
    }
};

export const registerValidation = () => [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is Required")
        .isLength({ min: 3, max: 50 }),
    body("email").trim().isEmail().withMessage("Invalid Email"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is Required")
        .isLength({
            min: 8,
            max: 20,
        }),
];

export const loginValidation = () => [
    body("email").trim().isEmail().withMessage("Invalid Email"),
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is Required")
        .isLength({
            min: 8,
            max: 20,
        }),
];
