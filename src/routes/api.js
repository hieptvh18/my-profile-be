import express from "express";
import { AuthController } from "../app/controllers/AuthController.js";
import { ContactController } from "../app/controllers/ContactController.js";
import * as cron from 'node-cron';

const apiRouter = express.Router();
const authController = new AuthController;
const contactController = new ContactController;

// route auth
apiRouter.post('/v1/login-post',authController.loginPost);
apiRouter.get('/get-user',authController.getUser);
// apiRouter.get('/create-user',authController.createUser);

// route contact
// apiRouter.get('/create-contact',contactController.create);
apiRouter.get('/list-all-contact',contactController.list);

apiRouter.get('/cron',()=>{
    cron.schedule('* * * * *', ()=>{
        console.log('logger cron');
    })
})

export default apiRouter;