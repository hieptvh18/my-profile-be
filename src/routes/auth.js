import express from "express";
import { AuthController } from "../app/controllers/AuthController.js";

const authRouter = express.Router();
const authController = new AuthController;

authRouter.get('/',authController.login);
authRouter.post('/post',authController.loginPost);

export default authRouter;