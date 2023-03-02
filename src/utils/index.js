import * as bcrypt from "bcrypt";

export const hashPassword = (password) => {
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      
    })
    .catch((err) => {
      console.log(err);
    });
};
