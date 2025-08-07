const prisma = require("../db/client")
const bcruptjs = require('bcryptjs')
const generateWebToken = require("../utils/generateToken")

// login route to authenticate user
const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) return res.status(401).json({ error: "All feilds must be required!", status: "failed" })

        const loginUserQuery = await prisma.$queryRaw`SELECT * FROM f_Login(${email}, ${password})`
        if (loginUserQuery[0]?.t_userid) {
            generateWebToken(res, loginUserQuery[0]?.t_userid)
            return res.status(200).json({ data: loginUserQuery, status: "success" })
        }

        // const encruptedPass = await  bcruptjs.hash(password, 8)
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
        const { name, userTypeId, email, password, phoneNumber } = req.body
        if (!name || !userTypeId || !email || !password || !phoneNumber) return res.status(401).json({ error: "All feilds must be required!", status: "failed" })
        const encruptedPass = await bcruptjs.hash(password, 8)
        const isExistUser = await prisma.$executeRaw
            `CALL sp_register(
        ${name}::varchar, 
        ${userTypeId}::integer,
        ${email}::varchar,
        ${password}::varchar,
        ${phoneNumber}::bigint)`

        if (isExistUser == 0) {
            return res.status(401).json({ error: "User Does Already Exists", status: "failed" })
        }

        return res.status(200).json({ data: isExistUser, status: "success" })
    } catch (err) {
        console.log(err.message, " error occured in authRegister")
        res.status(400).json(err.message)
    }
}
module.exports = { authLogin, authRegister }