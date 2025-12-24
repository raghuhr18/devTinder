const express = require('express');
const app = express();  

  app.listen(7777, () => {
    console.log('Server is running on port 7777');
  })
  app.use("/test", (req, res) => {
    res.send("Request received");
  })
  app.get("/user", (req, res) => {
    res.send({firstName: "raghu", lastName: "Hegde"});
  })
  app.post("/user", (req, res) => {
    res.send("Post request sent successfully");
  })
  app.put("/user",(req, res) => {
    res.send("Put request sent successfully");
  })
  app.delete("/user",(req, res) => {
    res.send("Delete request sent successfully");
  })
  app.use("/", (req, res) => {
    res.send("Request received from root");
  })
