const express = require('express');

const app = express();

app.use("/test", (req, res) => {
    res.send('Hello, World! hello from test route');
})

app.listen(7778, () => {
    console.log('Server is running on port 7778');
});