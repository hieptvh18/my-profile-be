import Contact from "../models/Contact.js";
import { transporter } from "../../configs/email/index.js";

export class ContactController {
  
  list(req, res, next) {
    var dataResponse = {
        message:"Contact list data",
        data:[]
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

  create(req, res, next) {
    // const formData = req.body;
    console.log(req.body);
    res.send(req.body);
    
    // let contact = new Contact(formData)
    //   .save()
    //   .then((res) => {
    //     res.send('add success contact');
    //     console.log("add contact success ");
    //   })
    //   .catch((err) => {
    //     res.status(500);
    //     res.send('add fail contact '+ err);
    //     console.log("err" + err);
    //   });
  }

  edit(req, res, next) {}

  /**
   * send email reply
   * @param {*} req 
   * @param {*} res 
   * @param {*} next 
   */
  reply(req, res, next) {
    // const mailOptions = {
    //   from: 'hieptvh18@gmail.com',
    //   to: 'hieptvh18@gmail.com',
    //   subject: 'Sending Email using Node.js',
    //   text: 'That was easy!'
    // }

    // transporter.sendMail(mailOptions,(error,info)=>{
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // })
    console.log(transporter);
  }
}
