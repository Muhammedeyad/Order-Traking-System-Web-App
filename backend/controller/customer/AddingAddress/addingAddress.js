const prisma = require("../../../db/client")


const addingAddress = async (req, res) => {
    try {
        const userid = req?.user.userId

        if (!userid) {
            return res.status(201).json({ error: "Do Login to Add Address!", status: 'failed' })
        }
        const { address = "", city = "", state = "", pincode = "", country = "" } = req.body
        console.log(address, 'her is your address')
        if (!address || !city || !state || !pincode || !country) return res.status(400).json({ error: "All Fields Must be Required!", status: "failed" })
        
        const stringPincode = String(pincode)
        const createdBy = String(userid)
        const userAddress = await prisma.address_master.create({
            data: {
                userid,
                address: address,
                city,
                state,
                pincode: stringPincode,
                country,
                createdby: createdBy
            }
        })
        if (!userAddress) {
            return res.status(501).json({ message: "error in adding address route", status: 'failed' })
        }
        return res.status(201).json({ data: userAddress, status: 'success' })
    } catch (err) {
        console.log(err.message)
        res.status(501).json({ message: err.message, status: 'failed' })
    }
}

module.exports = { addingAddress }
