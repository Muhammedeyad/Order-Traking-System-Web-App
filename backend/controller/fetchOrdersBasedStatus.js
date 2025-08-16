const prisma = require("../db/client");

const fetchOrderBasedOnStatus = async(req, res)=>{
    try{
        const user= req.user
        if(!user) return res.status(400).json({error: "Login to fetch data!", status: 'failed'})
        const orderStatusId = parseInt(req.params.orderstatusid)
        
        const orders = await prisma.orders_master.findMany({
            where:{
                statusid: orderStatusId,
                isactive: '1'
            }
        })
        if(!orders){
            return res.status(401).json({message: "not found error in fetchorder", status: 'failed'})
        }
        return res.status(201).json({data: orders, status: 'success'})
    }catch(err){
        console.log(err.message, "fetchOrderBasedOnStatus")
        res.status(401).json({message:err.message, status: "failed"})
    }
}

module.exports={fetchOrderBasedOnStatus}