const UserModel = require("../model/User")
//Signup

const signup = (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    UserModel.create({ name, email, password, confirmpassword })
        .then(user => req.json(user))
        .catch(err => res.json(err));

}
module.exports = { signup };