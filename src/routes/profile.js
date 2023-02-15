import express from "express";
import {ProfileController} from "../app/controllers/ProfileController.js";

const profileRouter = express.Router();
const profileController = new ProfileController;

profileRouter.get('/',profileController.index);

export default profileRouter;