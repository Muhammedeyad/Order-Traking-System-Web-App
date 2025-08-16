const fs= require('fs')
const fsPromises = require('fs').promises
const path= require('path')

const logError= async(errMessage)=>{
    const currentTime = Date.now()
    if(!fs.existsSync(path.join(__dirname, "logevents"))){
        fsPromises.mkdir(path.join(__dirname, "logevents"))
    }else{
        fsPromises.appendFile(path.join(__dirname, 'logevents', 'logevent.txt'), errMessage+"---"+currentTime)
        console.log('message logged ')
    }
}
module.exports={logError}