export class AuthController {
    //login page
    login(req, res, next){
        res.render('auth/login');
    }

    /**
     * login post action
     */
    loginPost(req,res, next){
        console.log(req.body);
        // res.send('login success');
    }
}