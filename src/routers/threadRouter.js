const express = require("express")
const threadRouter = express()
// const jwt = require("jsonwebtoken")
const Session = require("../models/sessionModel.js")
const Thread = require("../models/threadModel.js")
const threadController = require("../controllers/threadController.js")


//JWT

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


// SESSION

threadRouter.post("/api/threads", threadController.handleCreateThread);

threadRouter.get("/api/threads", threadController.handleGetThreads);




module.exports = threadRouter