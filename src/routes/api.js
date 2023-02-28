import express from "express";
import { AuthController } from "../app/controllers/AuthController.js";
import * as cron from 'node-cron';

const apiRouter = express.Router();
const authController = new AuthController;

// define routing api
apiRouter.post('/v1/login-post',authController.loginPost);
apiRouter.get('/get-user',authController.getUser);
// apiRouter.get('/create-user',authController.createUser);
apiRouter.get('/cron',()=>{
    cron.schedule('* * * * *', ()=>{
        console.log('logger cron');
    })
})

export default apiRouter;