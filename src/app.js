const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');

const app = express();
app.use(express.json());

app.post("/login", (req, res) => {
  res.send("login");
});

app.get("/admin", adminAuth, (req, res) => {
  res.send("Authorized admin");
});

app.get("/admin/getAllData", adminAuth, (req, res) => {
  res.send("getting all admin data");
});

app.get("/user", userAuth, (req, res) => {
  res.send("Authorized user");
});

app.get("/user/getAllData", userAuth, (req, res) => {
  res.send("getting all User related data");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
