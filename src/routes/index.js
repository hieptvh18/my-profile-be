import express from "express";
import apiRouter from "./api.js";

// defined routing && prefix route
const route = (app)=>{
    app.use('/api',apiRouter);
}

export default route;