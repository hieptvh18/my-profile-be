import Contact from "../models/Contact.js";

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
    let contact = new Contact({
      name: "Man xi da",
      email: "hieptvh18@gmail.com",
      phone: "",
      title: "Reply mail test",
      message: "We are hiring ",
    })
      .save()
      .then((res) => {
        console.log("add contact success ");
      })
      .catch((err) => {
        res.status(500);
        console.log("err" + err);
      });
  }

  edit(req, res, next) {}

  reply(req, res, next) {}
}
