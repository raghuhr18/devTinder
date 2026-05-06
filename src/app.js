const express = require('express');
const connectDB = require('./config/database');

const app = express();
const User = require("./models/user")

app.post("/signup", async(req, res) => {
    const user = new User({
        firstName : "Virat",
        lastName : "Kohli",
        emailId : "virat@kohli.com",
        password : "virat@123"
    })
    await user.save();
    res.send("user added successfully")
})

connectDB().
then(() => {
    console.log('Database connection established');
    app.listen(7778, () => {
        console.log('Server is running on port 7778');
    });
}).catch((err) => {
    console.error('Database connection failed:', err);
});
