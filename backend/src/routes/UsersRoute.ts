// import { Router } from "express";
// import { protectedRoute, register, login } from "../controllers/userController";
// import { loginValidation, registerValidation } from "../middleware/validator";

// const userRouter = Router();
// import { Request, Response, NextFunction, RequestHandler } from "express";

// const asyncHandler = (
//     fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
// ): RequestHandler => {
//     return (req, res, next) => {
//         Promise.resolve(fn(req, res, next)).catch(next);
//     };
// };

// userRouter.post("/login", loginValidation(), asyncHandler(login));

// userRouter.post("/register", registerValidation(), asyncHandler(register));

// userRouter.get("/protected", asyncHandler(protectedRoute));
// userRouter.get("/protected-admin", asyncHandler(protectedRoute));

// export default userRouter;
