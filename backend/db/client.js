const { PrismaClient } = require("../generated/prisma/client");

 
const prisma = new PrismaClient()
 
if(prisma){
    console.log('db connected')
}
module.exports = prisma 