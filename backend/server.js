const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookie_parser= require('cookie-parser')
const multer = require('multer')
const multerupload = require('./multer/SingleImageUpload/singleImageUpload')
dotenv.config()
const PORT = 5000 || process.env.PORT
const path = require('path')
const NoRouteFound = require('./middleware/NoRouteFound')
const ErrorHandling = require('./middleware/ErrorHandling')
const ratelimiter= require('express-rate-limit')

//-----------------------limit the ip request for each site
const limiter = ratelimiter({
    fnwindow: 15 * 60 * 1000,
    max: 1
})

app.get("/", (req, res)=>{
    throw new Error('not good')
})

// -------------------Allowing App to make request
app.use(express.json())
app.use(cookie_parser())
app.use(express.static(path.join(__dirname, "..", "uploads")))
app.use(NoRouteFound)
app.use(ErrorHandling)
app.use(limiter)

// ------------------App Routes ---------------
// ----------------COMMON ROUTES
app.use('/api/user', require("./routes/AddingAddressRoute"))
// ----------------CUSTOMER ROUTES
app.use("/api/user", require("./routes/authentication"))
app.use("/api/customer", require('./routes/CustomerRoutes/CustomerRoutes'))
// ----------------ADMIN ROUTES
app.use("/api/admin", require('./routes/AdminRoutes/AdminRoutes'))
app.use("/api/orders", require('./routes/fetchOrdersRoute'))
// ----------------AGENT ROUTES
app.use("/api/agent", require('./routes/AgentRoutes/agentRoutes'))




app.post('/upload', multerupload.single('image'), (req, res)=>{
    console.log(req.file)
    res.send('fine')
})
app.get("/get/:pathname", (req, res)=>{
    const filename = req.params.pathname
    const image=path.join(__dirname, "..", "uploads", filename)
    res.sendFile(image)
})

// ----------------- App listenting--------------------
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})