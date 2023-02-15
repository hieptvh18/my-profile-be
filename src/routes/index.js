import express from "express";
import profileRouter from "./profile.js";
import dashboardRouter from "./dashboard.js";
import authRouter from "./auth.js";

// defined routing && prefix route
const route = (app)=>{
    app.use('/admin',dashboardRouter)
    app.use('/admin/profile-manage',profileRouter)

    //auth route
    app.use('/login',authRouter);
}

export default route;