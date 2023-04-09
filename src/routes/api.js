import express from "express";
import { AuthController } from "../app/controllers/AuthController.js";
import { ContactController } from "../app/controllers/ContactController.js";
import { middlewareLogin } from "../app/middlewares/auth.js";
import * as cron from 'node-cron';

const apiRouter = express.Router();
const authController = new AuthController;
const contactController = new ContactController;

// route auth + middleware check login jwt
apiRouter.post('/login-post',authController.loginPost);

// route profile admin
apiRouter.get('/get-user',middlewareLogin,authController.getUser);
apiRouter.post('/update-user',middlewareLogin,authController.updateUser);

// route contact
// apiRouter.get('/create-contact',contactController.create);
apiRouter.get('/list-all-contact',middlewareLogin,contactController.list);
apiRouter.post('/reply-email-contact',middlewareLogin,contactController.reply);
apiRouter.post('/create-contact',middlewareLogin,contactController.create);
apiRouter.delete('/delete-contact/:_id',middlewareLogin,contactController.delete);

apiRouter.get('/cron',()=>{
    cron.schedule('* * * * *', ()=>{
        console.log('logger cron');
    })
});

export default apiRouter;