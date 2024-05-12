const Session = require("../models/sessionModel.js")

async function middleWare(req, res, next) {
    const sessionId = req.cookies?.session_id;


    if (!sessionId) {
        return res.send("Kamu tidak memiliki session, Kamu tidak memiliki akses disini!")
    }
    const session = await Session.findOne({ _id: sessionId })
    // console.log(session);

    if (!session) {
        return res.send("Kamu tidak memiliki session, Kamu tidak memiliki akses disini!")

    }
    console.log("Ini middleware");
    next()
}


module.exports = middleWare