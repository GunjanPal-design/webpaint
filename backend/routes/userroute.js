const express = require('express')
const userControl = require("../controller/Usercontrol")
const router = express.Router();
router.post('/signup', userControl.signup)
module.exports = router;



// localjost:5000/user/signup