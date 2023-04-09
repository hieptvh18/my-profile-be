import Contact from "../models/Contact.js";
import { transporter } from "../../configs/email/index.js";

export class ContactController {
  list(req, res, next) {
    var dataResponse = {
      message: "Contact list data",
      data: [],
    };
    Contact.find({})
      .then((response) => {
        dataResponse.data = response;
        res.send(dataResponse);
      })
      .catch((err) => {
        res.status(500);
        dataResponse.message = err;
        res.send(dataResponse);
      });
  }


  /**
   * create contact
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  create(req, res, next) {
    const formData = req.body;

    let contact = new Contact(formData)
      .save()
      .then((response) => {
        res.json({
          status: "success",
          message: "Create contact success!",
          data: response,
        });
      })
      .catch((err) => {
        res.status(500);
        res.json({
          status: "error",
          message: "Create contact is error" + err,
          data: [],
        });
      });
  }

  /**
   * update contact
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  edit(req, res, next) {
    const formData = req.body;

    let contact = Contact.updateOne({ _id: formData._id }, formData)
      .then((response) => {
        res.json({
          status: "success",
          message: "Update contact success!",
          data: response,
        });
      })
      .catch((err) => {
        res.json({
          status: "error",
          message: "Create contact error!",
          data: [],
        });
      });
  }

  /**
   * delete contact
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  delete(req, res, next){
    const _id = req.params._id;

    Contact.deleteOne({_id:_id})
    .then(response=>{
        res.json({
          status:'success',
          message:"Delete sucess!",
          data:response
        })
    })
    .catch(err=>{
      res.json({
        status:'error',
        message:"Delete error: "+err,
        data:[]
      })
    })
  }

  /**
   * send email reply
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  reply(req, res, next) {
    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: 'hieptvh18@gmail.com',
      subject: 'Sending Email using Node.js',
      html: '<h1>That was easy!</h1>',
      text: 'hihihi'
    }

    transporter.sendMail(mailOptions,(error,info)=>{
      if (error) {
        res.send(error);
      } else {
        res.send('Email sent: ' + info.response);
      }
    })
    console.log(transporter);
  }
}
