const express = require('express');
const app = express();  
const connectDB = require('./config/database');
const User = require('./models/user');
const user = require('./models/user');
// const {adminAuth, userAuth} = require('./middlewares/auth');


// Middleware to parse JSON bodies
app.use(express.json());

app.post("/signup", async(req, res) => {


  console.log(req.body)
//creating a new instance of the User model
  const user = new User(req.body);

try {
  // Saving the user to the database
  await user.save();
  res.send("User added successfully!!");
} catch (error) {
  console.error("Error adding user:", error);
  res.status(400).send("Internal Server Error");
}
});



connectDB().then(() => {   
  console.log("MongoDB connected successfully");
  app.listen(7777, () => {
    console.log('Server is running on port 7777');
  })

}).catch((err) => {
  console.error("MongoDB connection failed:", err);
})
 
// app.use("/admin", adminAuth )
// app.use("/user", userAuth)