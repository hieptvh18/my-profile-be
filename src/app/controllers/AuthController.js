import User from "../models/User.js";

export class AuthController {
  /**
   * login post action
   */
  loginPost(req, res, next) {
    
  }

  /**
   * api get user
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  getUser(req, res, next) {
    let user = User.findOne({})
      .then((response) => res.send(response))
      .catch((err) => {
        res.status(500)
        res.send(err);
      });
  }

  /**
   * api edit user
   * @param {*} res 
   * @param {*} res 
   * @param {*} next 
   */
  updateUser(req,res,next){
    let formData = req.body;
    User.updateOne({_id:req.params.id},formData)
        .then(()=>{
            res.status(201)
            res.send({'message':'update success'})
        })
        .catch(next)
  }

  createUser(req, res, next) {
    let user = new User({
      name: "Hiep tran",
      avatar: "",
      age: 21,
      email: "hieptvh@gmail.com",
      address: "Ha tinh",
    });
    user
      .save()
      .then((res) => {
        console.log("add success customer");
      })
      .catch((er) => {
        console.log(er);
      });

    console.log("auth controller");
  }
}
