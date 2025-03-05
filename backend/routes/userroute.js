const express = require('express')

const userControl = require("../controller/Usercontrol")
const router = express.Router();
router.post('/Sign', userControl.Sign)
router.post('/Login', userControl.Login)


module.exports = router;



// localjost:5000/user/signup