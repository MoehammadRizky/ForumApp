const express = require ("express")
const bookmarkRouter = express()

bookmarkRouter.get("/bookmark", (req, res)=>res.send("Ini data seluruuh bookmark!"))



module.exports = bookmarkRouter