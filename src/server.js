const express = require("express")
const app = express()
const authRouter = require("./routers/authRouter.js")
const replyRouter = require("./routers/replyRouter.js")
const threadRouter = require("./routers/threadRouter.js")
const bookmarkRouter = require("./routers/bookmarkRouter.js")
const mongoose = require("mongoose")
const MONGO_DB_URL = require("./config/dburl.config.js")
const cookieParser = require("cookie-parser")
const middleWare = require("./controllers/middleware.js")
const cors = require("cors")

mongoose.connect(MONGO_DB_URL)
// console.log(MONGO);


app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use("/api", middleWare)


//router
app.use(authRouter)
app.use(bookmarkRouter)
app.use(replyRouter)
app.use(threadRouter)


app.listen(8000)