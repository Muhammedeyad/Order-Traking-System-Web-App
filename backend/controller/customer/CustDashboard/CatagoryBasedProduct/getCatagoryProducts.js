const prisma = require("../../../../db/client")

const getCatagoryProducts = async (req, res)=>{
    try{
        const catagoryId =Number(req.params.catagoryId)
       
        const catagoryBasedProd = await prisma.$queryRaw `
            SELECT * FROM products_master 
            WHERE categoryId=${catagoryId} AND  isactive='1'
        `
        if(!catagoryBasedProd){
            return res.status(401).json({message: "problem in getting catagory based product", status: 'failed'})
        }
        res.status(201).json({data: catagoryBasedProd, status: "success"})
    }catch(err){
        console.log(err.message, 'error from catagorybasedproduct route')
        res.status(401).json(err.message)
    }
}
module.exports = {getCatagoryProducts}