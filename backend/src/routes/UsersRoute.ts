import { Router } from "express";

const userRouter = Router();

userRouter.post("/login");

userRouter.post("/register");

userRouter.get("/protected");
userRouter.get("/protected-admin");

export default userRouter;
