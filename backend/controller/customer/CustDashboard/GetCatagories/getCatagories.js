const prisma = require("../../../../db/client")

const getCatagory = async (req, res)=>{
    try{
        const allCatagory = await prisma.category_master.findMany({
            where:{
                isactive:'1'
            }
        })
        res.status(201).json({data: allCatagory, status: "success"})
    }catch(err){
        res.status(201).json({data: data, status: "failed"})
    }
}
module.exports={getCatagory}