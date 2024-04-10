import "dotenv/config"
import app from "./app"
import mongoose from "mongoose"

const port = process.env.PORT || 3000

const mongo = String(process.env.MONGO_CONNECTION_STRING)

mongoose.connect(mongo).then(() => {
    console.log("Mongoose connected")
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})
    