import { Router } from "express";
import { register, login } from "../controllers/userController";
const userRouter = Router();

userRouter.post("/signup", register);
userRouter.post("/login", login);

userRouter.get("/protected");
userRouter.get("/protected-admin");

export default userRouter;
