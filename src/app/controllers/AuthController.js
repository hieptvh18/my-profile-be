import User from "../models/User.js";
import * as bcrypt from "bcrypt";
import pkg from 'jsonwebtoken';
const { sign,verify } = pkg;

export class AuthController {
  /**
   * login post action
   */
  async loginPost(req, res, next) {
    try{
      const { email, password } = req.body;

      const user = await User.findOne({ email});
  
      if (!user) return res.json({ status: "error", message: "User not found!" });
  
      if (await bcrypt.compare(password, user.password)) {
        const token = sign({ email: user.email }, process.env.JWT_SCRET,{expiresIn:process.env.TOKEN_EXPIRATION});

        if (res.status(201)) {
          return res.json({
            status: "success",
            message: "Login success",
            token: token,
          });
        } else {
          return res.json({ status: "error",message: "error" });
        }
      }
    }catch(err){
      console.log(err);
      return res.json({status:"error",message:"Error!Try again!"});
    }

    return res.json({ status: "error", message: "Invalid password", data: "" });
  }

  verifyTokenLogin(req,res,next){
    const token = req.header.token;
    
  }

  /**
   * api get user
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getUser(req, res, next) {
    var dataResponse = {
      status: "success",
      message: "User infomation",
      data: [],
    };
    User.findOne({})
      .then((response) => {
        dataResponse.data = response;
        res.send(dataResponse);
      })
      .catch((err) => {
        dataResponse.status = "Error";
        dataResponse.message = "Error " + err;
        res.status(500);
        res.send(dataResponse);
      });
  }

  /**
   * api edit user
   * @param {*} res
   * @param {*} res
   * @param {*} next
   */
  updateUser(req, res, next) {
    let formData = req.body;
    var dataResponse = {
      status: "success",
      message: "Update user infomation successfully!",
      data: [],
    };
    User.updateOne({ email: req.body.email }, formData)
      .then((response) => {
        dataResponse.data = response; 
        res.status(201);
        res.send(dataResponse);
      })
      .catch(err=>{
        dataResponse.status = 'error';
        dataResponse.message = 'Error in processing save!';
      });
  }

  async createUser(req, res, next) {
    const pass = await bcrypt.hash("123123", 10);

    User.updateOne(
      { _id: "63fcc86682867b40a8e4a0c8" },
      {
        name: "Hiep tran1",
        avatar: "a.png",
        age: 21,
        email: "hieptvh@gmail.com",
        address: "Ha tinh",
        phone: "091232111",
        password: pass,
        social_link: {
          fb: "https://facebook.com/tvhh",
          email: "hieptvh18@gmail.com",
        },
      }
    )
      .then(() => {
        res.status(201);
        res.send({ status: "Success", message: "update success" });
      })
      .catch(next);
    // }
  }

  /**
   * upload file image from react to cloudainry
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  uploadFile(req, res, next) {}
}
