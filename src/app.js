const express = require('express');
const connectDB = require('./config/database');

const app = express();
const User = require("./models/user")

app.use(express.json());
app.post("/signup", async(req, res) => {
    // const user = new User({
    //     firstName : "MS",
    //     lastName : "Dhoni",
    //     emailId : "ms@dhoni.com",
    //     password : "msd@123"
    // })
    const user = new User(req.body);
    try {
        await user.save();
        res.send("user added successfully")
        console.log(req.body)
    }catch(err) {
        res.status(500).send("Error adding user: " + err.message);
    }
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
