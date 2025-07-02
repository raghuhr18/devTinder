const express = require('express');
const app = express();  

app.get('/user', (req, res, next) => {
    res.send("Hello, User!");
    next();
});

app.get('/user', (req, res, next) => {
    res.send("Hello, User - 2!");
});

app.listen(7777, () => {
  console.log('Server is running on port 7777');
})