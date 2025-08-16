const express = require('express')
const { adminUpdateStatusConfirm } = require('../../controller/admin/AdminManageOrders/adminOrdersController')
const { AdminProductCreation, AdminCatagoryCreation } = require('../../controller/admin/AdminCreateProduct/AdminProductCatagoryCreation')
const { isAuthenticateUser } = require('../../middleware/isAuthenticate')
const router = express.Router()

router.route("/uporderstatus/confirm/:orderid")
.get(adminUpdateStatusConfirm)

router.route('/create/product')
.post(isAuthenticateUser, AdminProductCreation)

router.route('/create/catagory')
.post(isAuthenticateUser, AdminCatagoryCreation)

module.exports = router