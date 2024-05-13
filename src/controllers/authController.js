const User = require("../models/userModel")
const Session = require("../models/sessionModel.js")
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")
require("dotenv").config();


async function handleLoginJWT(req, res) {
    const { email, password } = req.body

    

    //- user dicari dari email
    const user = await User.findOne({ email })
    if (!user) res.status(404).json({ message: "account not found" })


    //- password user dicocokkan 
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        res.status(403).json({ message: "Invalid Password, Please try again" })
    }
    //- buat payload untuk token
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
    }
    //- generate token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" })

    //- set token ke cookie user
    res.cookie("token", token).send({
        "message": "Halo,login ini sukses",
        user: payload
    })
}

async function handleLoginSession(req, res) {
    const { email, password } = req.body

    //- user dicari dari email
    const user = await User.findOne({ email })
    if (!user) res.status(404).json({ message: "account not found" })


    //- password user dicocokkan 
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        res.status(403).json({ message: "Invalid Password, Please try again" })
    }


    // masukkan kedalam session DB
    const newSession = new Session({
        userId: user.id
    })
    const session = await newSession.save()
    // console.log(session);

    const userData = {
        id: user.id,
        name: user.name,
        email: user.email
    }
    //kirim session ID ke cookie
    res.cookie("session_id", session.id).json({
        message: "login success",
        user: userData
    })

}

async function handleRegister(req, res) {
    const { name, email, password } = req.body
    const hashedPass = await bcrypt.hash(password, 12)


    // console.log({password, hashedPass});
    const newUser = new User({
        name, email, password: hashedPass
    })
    const user = await newUser.save()
    res.status(201).json({ message: "user registered success", data: user })

}

async function handleLogOut(req, res) {
    // delete session
    const session_id = req.cookies?.session_id
    await Session.findByIdAndDelete(session_id)

    return res.send("Berhasil log Out")

}

module.exports = { handleLoginJWT, handleLoginSession, handleRegister, handleLogOut }
