import Blog from "../models/Blog";

export class BlogController{
    // function get list blog
    list(req,res, next){

    }

    
  /**
   * api get user
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  getBlog(req, res, next) {
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
  updateBlog(req, res, next) {
    let formData = req.body;
    User.updateOne({ _id: req.params.id }, formData)
      .then(() => {
        res.status(201);
        res.send({ message: "update success" });
      })
      .catch(next);
  }

}

