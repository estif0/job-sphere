import { Router } from "express";
import { register, login, getMe } from "../controllers/userController";
import { protect } from "../middleware/authenticate.middleware";
import logger from "../middleware/logger";
const userRouter = Router();

userRouter.post("/signup", logger, register);
userRouter.post("/login", logger, login);

userRouter.get("/me", protect, getMe);

export default userRouter;
