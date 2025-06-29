// const express = require("express")

// const app = express();

// app.use("/hello", (req, res) => {
//     res.send("Hello from Hello")
// })
// app.use("/hello/test", (req, res) => {
//     res.send("Hello from Hello Test")
// })
// app.post("/user", (req, res) => {
//     res.send({"firstName": "John", "lastName": "Doe"})
// })
// app.use("/", (req,res) => {
//     res.send("Hello from Dashboard")
// })

// app.listen(7777, () => {
//     console.log("Listening.....!")
// })


const express = require("express");
const app = express();

app.get(
    "/user",
    (req, res, next) => {
        console.log("First response handler");
        next()
    },
    (req, res, next) => {
        console.log("Second response handler");
        next()
    },
    (req, res, next) => {
        console.log("Third response handler");
        next();
    },
    (req, res, next) => {
        console.log("Fourth response handler");
        next()
        res.send("This is the fourth handler");
    },
    (req, res) => {
        console.log("Fifth response handler");
        res.send("This is the fifth handler"); // This is the fifth handler
    }
)

app.listen(7777, () => {
    console.log("just started listenin port 7777");
})
