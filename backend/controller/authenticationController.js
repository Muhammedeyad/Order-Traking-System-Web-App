const prisma = require("../db/client")
const bcruptjs = require('bcryptjs')
const generateWebToken = require("../utils/generateToken")

// login route to authenticate user
const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(401).json({ error: "All feilds must be required!", status: "failed" })

        const loginUserQuery = await prisma.users_master.findFirst({
            where: {
                email:email
            }
        })
        if(!loginUserQuery) return res.status(400).json({'error': "user does't exists", status: 'failed'})
        if (loginUserQuery?.userid) {
            const isCorrectPass = await  bcruptjs.compare(password, loginUserQuery.password)
            console.log(loginUserQuery)
            if(isCorrectPass){
                generateWebToken(res, {userId: loginUserQuery.userid, userRole: loginUserQuery.usertypeid})
                return res.status(200).json({ data: loginUserQuery, status: "success" })
            }
            return res.status(401).json({error: "password incorrect!", status:"failed"})
        }
        // const data = await prisma.$queryRaw`CALL getUsers(${email}, ${password})`
        return res.status(401).json({ data: loginUserQuery[0]?.t_status, status: "failed" })
    } catch (err) {
        console.log(err.message, 'error occured in login route')
        res.status(400).json(err.message)
    }
}

// register route to let the user to register if account does't exists already
const authRegister = async (req, res) => {
    try {
        const { name, email, password, phoneNumber, usertypeName= 'customer' } = req.body
        const user =await prisma.usertypes_master.findFirst({
            where: {
                usertype: usertypeName
            },
            select: {
                usertypeid: true
            }
        })
        if (!name || !email || !password || !phoneNumber) return res.status(401).json({ error: "All feilds must be required!", status: "failed" })
        const encruptedPass = await bcruptjs.hash(password, 8)
        const isExistUser = await prisma.$queryRaw 
        `SELECT * FROM users_master 
        WHERE email=${email}` 
        if (isExistUser?.length < 1 ) {
            const newUser = await prisma.users_master.create({
                data :{
                    username: name,
                    usertypeid: user.usertypeid,
                    email: email,
                    password: encruptedPass,
                    phoneno: phoneNumber
                }
            })
            return res.status(401).json({ data: newUser, status: "success" })
        } 
        return res.status(200).json({ error: "User Already Exists!", status: "failed" })
    } catch (err) {
        console.log(err.message, " error occured in authRegister")
        res.status(400).json(err.message)
    }
}




module.exports = { authLogin, authRegister }