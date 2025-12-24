const express = require('express');
const app = express();  

  app.use("/test", (req, res) => {
    res.send("Request received");
})
  app.listen(7777, () => {
    console.log('Server is running on port 7777');
  })