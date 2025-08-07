const jwt = require('jsonwebtoken')

const generateWebToken =  (res, userId)=>{
    try {
       
        const token =  jwt.sign({userId: userId}, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRES_IN
        })
        console.log(token, 'here is your token GOOD FINE    ')
        if (!token) return res.status(401).json({ error: "could't generate auth token!" })
        const cookiel  = res.cookie('authuser', token, {
            maxAge: process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 10000,
            sameSite: "lax",
            httpOnly: true
        })
    } catch (err) {
        console.log(err.message, "error occured in generating token")
        res.status(400).json(err.message)
    }
}
module.exports = generateWebToken