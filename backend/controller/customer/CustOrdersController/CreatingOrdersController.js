const prisma = require("../../../db/client")

const creatingOrderController = async(req, res)=>{
    try{
        const userId = req.user.userId
        const {
            totalamount,
            products,
            addressId
        } = req.body
        const intAddressId =  parseInt(addressId)
        const stringUserId = String(userId)
        if(!totalamount|| products?.length < 1 || !addressId) return res.status(401).json({error: "All fiedls Must be required!", status: 'failed'})
        const orderCreation = await prisma.orders_master.create({
            data: {
                userid: userId,
                totalamount: totalamount,
                address_id:intAddressId,
                createdby: stringUserId
            }
        })
        if(!products) return res.status(404).json({message: "error found in products route!"})
        products.map(async (item, idx)=>{
            const orderItemCreation = await prisma.orderitems_master.create({
                data: {
                    orderid: orderCreation.orderid,
                    productid: item.productid,
                    quantity: item.quantity,
                    unitprice: item.unitprice
                }  
            })
            
        })
       
        res.status(201).json({data: orderCreation, status: "success"})
    }catch(err){
        res.status(401).json(err.message)
        console.log(err.message, "error from creatingOrdersRoute")
    }
}
module.exports = {creatingOrderController}