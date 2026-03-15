const express = require('express');
const { isAdminAuthorized, isUserAuthenticated } = require('./middlewares/auth');

const app = express();

app.use("/admin", isAdminAuthorized)

app.use("/user/login", (req, res) => {
    res.send("User logged in successfully");
})

app.get("/admin/getAllUsers", (req, res) => {
    res.send("All users data");
})

app.delete("/admin/deleteUser", (req, res) => {
    res.send("User deleted");
})

app.use("/user", isUserAuthenticated,
    (req, res, next) => {
        res.send("getting all the user details");
    })

app.listen(7778, () => {
    console.log('Server is running on port 7778');
});