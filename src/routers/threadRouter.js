const express = require("express")
const threadRouter = express()
const jwt = require("jsonwebtoken")
const Session = require("../models/sessionModel.js")

// threadRouter.get("/threads", (req, res) => {
//     const token = req.cookies.token

//     try {
//         const payload = jwt.verify(token, process.env.JWT_SECRET)
//         console.log(payload);
//         res.send("Ini data seluruuh threads!")
//     } catch (error) {
//         res.send("Kamu tidak punya akses! ")
//     }
// })

threadRouter.get("/api/threads", async (req, res) => {
    // const sessionId = req.cookies?.session_id;


    // if (!sessionId) {
    //     return res.send("Kamu tidak memiliki akses disini!")
    // }
    // const session = await Session.findOne({ _id: sessionId })
    // // console.log(session);

    // if (!session) {
    //     return res.send("Kamu tidak memiliki akses disini!")

    // }
    
    return res.send("Ini Data threads!")
})

module.exports = threadRouter