const { logError } = require("../Logs/logError")

module.exports= function errorHandling(err, req, res, next){
    console.error(err.stack)
    logError(err.message)
    res.status(500).json({error:err.message, status: false})
}