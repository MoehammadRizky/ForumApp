const express = require("express")
const authRouter = express()
const authController = require("../controllers/authController.js")

authRouter.post("/login", authController.handleLoginSession)
authRouter.post("/register", authController.handleRegister)
authRouter.get("/logout", authController.handleLogOut)


module.exports = authRouter