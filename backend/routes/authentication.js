const express = require('express')
const { authRegister, authLogin } = require('../controller/authenticationController')
const router = express.Router()

router.post("/login", authLogin)
router.post("/register", authRegister)
module.exports=router