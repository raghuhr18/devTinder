const express = require('express');

const app = express();

app.get('/user', (req, res) => {
    res.send('This is from the get call');
});

app.post('/user', (req, res) => {
    res.send('This is from the post call');
});
app.delete('/user', (req, res) => {
    res.send('This is from the delete call');
});
app.put('/user', (req, res) => {
    res.send('This is from the put call');
});

app.use("/test", (req, res) => {
    res.send('Hello, World! hello from test route');
})
app.listen(7778, () => {
    console.log('Server is running on port 7778');
});