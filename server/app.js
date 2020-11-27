
import express from "express"

const app = express()

app.get("/user", (req, res) => {
    res.json("Working")
})

app.listen(2000, () => {
    console.log("Server is running on port 2000")
})