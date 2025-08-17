module.exports= function noRouteFound(req, res, next){
    res.status(404).json({message: "no route found", status: false})
    next()
}