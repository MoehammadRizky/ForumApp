const express = require ("express")
const replyRouter = express()


replyRouter.get("/api/reply", (req, res)=>res.send("Ini data seluruh reply!"))

module.exports = replyRouter