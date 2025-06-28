const express = require("express")

const app = express();

app.use("/hello", (req, res) => {
    res.send("Hello from Hello")
})
app.get("/user", (req, res) => {
    res.send({"firstName": "John", "lastName": "Doe"})
})
app.use("/", (req,res) => {
    res.send("Hello from Dashboard")
})

app.listen(7777, () => {
    console.log("Listening.....!")
})
