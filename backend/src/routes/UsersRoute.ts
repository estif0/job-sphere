import { Router } from "express";
import { register, login, getMe } from "../controllers/userController";
import { protect } from "../middleware/authenticate.middleware";

const userRouter = Router();

userRouter.post("/signup", register);
userRouter.post("/login", login);

userRouter.get("/me", protect, getMe);

export default userRouter;
