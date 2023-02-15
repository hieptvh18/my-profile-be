import express from "express";
import profileRouter from "./profile.js";
import dashboardRouter from "./dashboard.js";

// defined routing && prefix route
const route = (app)=>{
    app.use('/admin',dashboardRouter)
    app.use('/admin/profile-manage',profileRouter)
}

export default route;