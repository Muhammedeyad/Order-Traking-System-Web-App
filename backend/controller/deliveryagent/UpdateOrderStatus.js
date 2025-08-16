const prisma = require("../../db/client")

// MAKE IT ONLY CAN THE PICKABLE BY DELIVERY AGNTTS AND AGENIT TO CHECK WHO PICKED THE ORDER
const updateOrderStatusDynamically = async (req, res) => {
    try {
        const user= req.user
        if(parseInt(user.userRole) != 4  ){
            return res.status(400).json({error: 'Restricted to Update for This Role', status: 'failed'})
        }
        const statusName= req.params.statusName

        const orderId= parseInt(req.params.orderId)
        const isStatusExists = await prisma.status_master.findFirst({
            where: {
                statusname: statusName
            }
        })
        
        if(!isStatusExists ||isStatusExists?.length < 1 ) return res.status(500).json({error: "Status Does't Exixts, Try Different!", status:"failed" })
        const updatedOrder = await prisma.$executeRaw`
        UPDATE orders_master 
        SET statusid=(SELECT statusid FROM status_master WHERE statusname=${statusName}), pickedby=${parseInt(user.userId)}
        WHERE orderid=${orderId}
        `
        if(!updatedOrder) return res.status(401).json({message: "error found in updateorder status dynamically", status: 'failed'})
        return res.status(201).json({data: updatedOrder, status:"success"})
    } catch (err) {
        res.status(401).json({ message: err.message, status: 'failed' })
        console.log(err.message, 'Update ORder Status')
    }
}
module.exports = {updateOrderStatusDynamically}