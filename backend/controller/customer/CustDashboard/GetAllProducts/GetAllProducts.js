const prisma = require("../../../../db/client")

const getAllProducts = async (req, res)=>{
    try{
        const productsData = await prisma.products_master.findMany({
            where: {
                isactive: '1'
            }
        })
        const userId= req.userId
        res.status(201).json({data: productsData, status: "success"})
    }catch(err){
        res.status(401).json(err.message)
        console.log(err.message, "error from getAllProducts")
    }
}
module.exports = {getAllProducts}