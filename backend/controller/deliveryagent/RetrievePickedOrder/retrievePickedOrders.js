const prisma = require("../../../db/client")

const retrievePickedOrders = async(req, res)=>{
    try{
        const authAgentId = req.user.userId
        if(!authAgentId){
            return res.status(400).json({error: "Log In to Retrieve Picked ORders!", status: 'failed'})
        }
        const pickedOrders = await prisma.orders_master.findMany({
            where: {
                pickedby: parseInt(authAgentId),
                NOT: {
                    statusid: 7
                }
            }
        })
        res.status(201).json({data: pickedOrders, status: 'success'})
    }catch(err){
        console.log(err.message, 'err found in retrieve picked orders')
        res.status(400).json({message: err.message, status: "failed" })
    }
}

module.exports ={retrievePickedOrders}