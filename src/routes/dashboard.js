import express from "express";
import { DashboardController } from "../app/controllers/DashboardController.js";

const dashboardRouter = express.Router();
const dashboardController = new DashboardController;

dashboardRouter.get('/',dashboardController.index);

export default dashboardRouter;