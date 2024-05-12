const Session = require("../models/sessionModel.js")

async function middleWare(req, res, next) {
    const sessionId = req.cookies?.session_id;


    if (!sessionId) {
        return res.send("Kamu tidak memiliki session, Kamu tidak memiliki akses disini!")
    }
    const session = await Session.findOne({ _id: sessionId })

    if (!session) {
        return res.send("Kamu tidak memiliki session, Kamu tidak memiliki akses disini!")

    }
    next()
}


module.exports = middleWare