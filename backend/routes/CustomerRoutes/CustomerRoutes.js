const express = require('express');
const { getAllProducts } = require('../../controller/customer/CustDashboard/GetAllProducts/GetAllProducts');
const { isAuthenticateUser } = require('../../middleware/isAuthenticate');
const { getCatagory } = require('../../controller/customer/CustDashboard/GetCatagories/GetCatagories');
const { getCatagoryProducts } = require('../../controller/customer/CustDashboard/CatagoryBasedProduct/getCatagoryProducts');
const { creatingOrderController } = require('../../controller/customer/CustOrdersController/CreatingOrdersController');
const router = express.Router();

router.route('/getProducts')
.get(isAuthenticateUser, getAllProducts)

router.route("/getCatagories")
.get(isAuthenticateUser, getCatagory)

router.route("/catagory/:catagoryId")
.get(isAuthenticateUser, getCatagoryProducts )



// route to place order
router.route('/placeorder')
.post(isAuthenticateUser, creatingOrderController)

module.exports=router