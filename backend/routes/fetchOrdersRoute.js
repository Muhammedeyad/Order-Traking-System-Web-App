const express = require('express')
const { fetchOrderBasedOnStatus } = require('../controller/fetchOrdersBasedStatus')
const { isAuthenticateUser } = require('../middleware/isAuthenticate')
const { authorizeRole } = require('../middleware/authorizeRole')
const router = express.Router()

// retrieving orders  based on status ----------------------
router.route('/fetch/:orderstatusid')
.get(isAuthenticateUser,authorizeRole([4, 1]),  fetchOrderBasedOnStatus)

module.exports = router