const Reply = require("../models/replyModel.js");
const Session = require("../models/sessionModel.js")
require("dotenv").config();

async function createReply(req, res) {
    const { content, userId } = req.body;

    const newReply = new Reply({
        content,
        threadId,
        userId
    });
    const reply = await newReply.save();

    res.status(201).json({ message: "Ini data Reply", data: reply });

}

module.exports = { createReply }