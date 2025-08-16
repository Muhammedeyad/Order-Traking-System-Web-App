const express = require('express')
const { isAuthenticateUser } = require('../middleware/isAuthenticate')
const { addingAddress } = require('../controller/customer/AddingAddress/addingAddress')
const router = express.Router()

router.route('/add/address')
.post(isAuthenticateUser,addingAddress)

module.exports=router