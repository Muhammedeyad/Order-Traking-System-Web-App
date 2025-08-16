const jwt = require('jsonwebtoken')

async function isAuthenticateUser(req, res, next){
    const cookie= req.cookies.authuser
    const token = await jwt.verify(cookie, process.env.SECRET_KEY)
    if(!token){
        return res.status(401).json({error: "LogIn Again To Continue!",status:"failed"})
    }
    req.user = token 
    next()
}
module.exports = {isAuthenticateUser}   