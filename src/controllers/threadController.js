const Thread = require("../models/threadModel.js");
const Session = require("../models/sessionModel.js")
require("dotenv").config();

async function handleCreateThread(req, res) {
    const { title, content, userId } = req.body;

    const newThread = new Thread({
        title,
        content,
        userId
    });
    const thread = await newThread.save();

    res.status(201).json({ message: "Ini adalah seluruh data thread", data: thread });

}
async function handleGetThreads(req, res) {
    const threads = await Thread.find().populate("userId");
    res.status(200).json(threads);

}

module.exports = { handleCreateThread, handleGetThreads }