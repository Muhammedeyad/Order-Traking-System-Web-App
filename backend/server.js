const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cookie_parser= require('cookie-parser')
dotenv.config()
const PORT = 5000 || process.env.PORT


// -------------------Allowing App to make request
app.use(express.json())
app.use(cookie_parser())

// ------------------App Routes ---------------
app.use("/api/user", require("./routes/authentication"))

app.get('/', (req,res)=>{
    res.status(200).json({data:"working fine "})
})

// ----------------- App listenting--------------------
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})