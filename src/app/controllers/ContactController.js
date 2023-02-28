import Contact from "../models/Contact.js";

export class ContactController {
  list(req, res, next) {
    Contact.find({})
    .then(response=>res.send(response))
    .catch(err=>{
        console.log('err'+ err)
        res.status(500);
        res.err;
    })
  }

  create(req, res, next) {
    let contact = new Contact({
      name: "Man xi da",
      email: "hieptvh18@gmail.com",
      phone: "",
      title: "Reply mail test",
      message: "Hello ban adasadsadasdadasdasdasdasdasd",
    })
      .save()
      .then((res) => {
        console.log("add contact success ");
      })
      .catch((err) => {
        res.status(500);
        console.log('err'+ err);
      });
  }

  edit(req, res, next) {}

  reply(req, res, next) {}
}
