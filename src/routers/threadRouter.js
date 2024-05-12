const express = require("express")
const threadRouter = express()
const jwt = require("jsonwebtoken")
const Session = require("../models/sessionModel.js")
const Thread = require("../models/threadModel.js")

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
    const sessionId = req.cookies?.session_id;

    const { title, content } = req.body
    const session = await Session.findById(sessionId)

    const newThread = new Thread({
        title, content, userId: session.userId
    })

    const savedThread = await newThread.save()

    return res.send("Ini Data threads!")
})



module.exports = threadRouter