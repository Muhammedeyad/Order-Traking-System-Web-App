const authorizeRole = function (authorizeRoles=[]) {
    return (req, res, next)=> {
        const user = req.user
        if (!req.user.userId) return res.status(400).json({ error: "user not Authenticated!", status: 'failed' })
        if(!authorizeRoles.includes(parseInt(req.user.userRole))){
            return res.status(400).json({error: "Role Restriction can't accesible!", status: 'failed'})
        }
        next()
    }

}
module.exports = { authorizeRole }
 