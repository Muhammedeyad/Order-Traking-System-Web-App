const prisma = require("../../../db/client")


const AdminProductCreation = async(req, res)=>{
    try{
        const userid = String(req.user.userId)
        if(!userid){
            return res.status(401).json({error: "Log In to Create Product!", status: 'failed'})
        }
        if(!req.file){
            return res.status(404).json({error: "Image not Found!", status: 'failed'})
        }
        const {catagoryId, productName, price, productdescription } = req.body
        if(!catagoryId || !productName || !price || !productdescription ) return res.status(401).json({error: "All feilds must be required!", status: 'failed'})
            
        const newProduct = await  prisma.products_master.create({
            data: {
                createdby: userid,
                categoryid:parseInt(catagoryId),
                productname: productName,
                price: price,
                productdescription: productdescription,
                image: req.file.filename
            }
        })
        res.status(201).json({data: newProduct, status: 'success'})
    }catch(err){
        console.log(err.message, "error found in admincreateproduct")
        res.status(501).json({message:err.message, status: 'failed'})
    }
}


const AdminCatagoryCreation = async(req, res)=>{
    try{
        const userid = String(req.user.userId)
        if(!userid){
            return res.status(400).json({error: "login Again to Continue!", status: 'failed'})
        }
        const {categoryname} = req.body
        if(!req.file){
            return res.status(404).json({error: "No Image Found!", status: 'failed'})
        }
        if(!categoryname) return res.status(401).json({error: "All feilds must be required!", status: 'failed'})
        if(!userid){
            return res.status(401).json({error: "Log In to Create Product!", status: 'failed'})
        }
        const newCatogory = await  prisma.category_master.create({
            data: {
               categoryname,
               createdby:userid,
               categoryImage: req.file.filename
            }
        })      
        res.status(201).json({data: newCatogory, status: 'success'})
    }catch(err){
        console.log(err.message, "error found in admincreateproduct")
        res.status(501).json({message:err.message, status: 'failed'})
    }
}

module.exports = {AdminProductCreation, AdminCatagoryCreation}