const prisma = require("../../../db/client")

// ----------UPDATE ORDER STATUS TO CONFIRMED
const adminUpdateStatusConfirm = async (req, res) => {
    try {
        const orderId = parseInt(req.params.orderid)

        const updatedOrder = await prisma.orders_master.update({
            where: {
                orderid: orderId
            },
            data:{
                statusid: 8
            }
        })
        updatedOrder.statusid=8 // status updated to confirmed
        if(!updatedOrder ){
            return res.status(401).json({message: "orderid Not Found Error", status: 'failed'})
        }
        res.status(401).json({ data: updatedOrder, status: 'success' })
    } catch (err) {
        console.log(err.message, 'error found in adminUpdateStatusConfirm')
        res.status(401).json({ message: err.message, status: 'failed' })

    }
}
module.exports = { adminUpdateStatusConfirm }