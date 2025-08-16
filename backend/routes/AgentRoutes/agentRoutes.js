const express = require('express')
const { updateOrderStatusDynamically } = require('../../controller/deliveryagent/UpdateOrderStatus')
const { isAuthenticateUser } = require('../../middleware/isAuthenticate')
const { retrievePickedOrders } = require('../../controller/deliveryagent/RetrievePickedOrder/retrievePickedOrders')
const { authorizeRole } = require('../../middleware/authorizeRole')
const router = express.Router()

router.route("/updateStatus/:statusName/:orderId")
.get(isAuthenticateUser, updateOrderStatusDynamically)

router.route("/getPickOrders/:ostatus")
.get(isAuthenticateUser, authorizeRole([4]),  retrievePickedOrders)

module.exports =router