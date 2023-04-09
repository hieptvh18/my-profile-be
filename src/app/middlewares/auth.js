import { verify } from "jsonwebtoken";

export function middlewareLogin(req,res,next){
    try{
        console.log(req.headers);
        const token = req.headers.token;
        const result = verify(token, process.env.JWT_SCRET);

        if(result){
            next();
        }
    }catch(err){
        res.status(403).json({
            status: 'error',
            message: 'Please auth!',
            data:[]
        })        
    }
}