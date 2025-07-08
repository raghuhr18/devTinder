const express = require('express');
const app = express();  
const connectDB = require('./config/database');
const User = require('./models/user');
const user = require('./models/user');
// const {adminAuth, userAuth} = require('./middlewares/auth');


app.post("/signup", async(req, res) => {
//creating a new instance of the User model
 const user = new User({
  firstName: "Virat",
 lastName: "Kohli",
 email: "Virat123@gmail.com ",
 password: "Test@123",
});

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