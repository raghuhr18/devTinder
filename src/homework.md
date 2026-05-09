Create repository
Initialize repository
node modules, package.json, package-lock.json
install express
Create s server
Listen to port 7777
Write request handlers for /test, /hello
Install nodemon
update script in packake.json
What are dependencies
what is the use of -g while installation
Difference between caret and tilde

Initialize git
Create git ignore file, add .node-modules in it
Set remote repoitory on github
Push all code to remote origin
Play with route extensions /hello, /hello/2, /test etc...
Important: Order of routes matters a lot
Install Postman create Workspace/Collection > test api call
Write logic to handle /GET, /POST, /PATCH, DELETE API calls using Postman
Explore routing use ?, * etc
Use of regex in routes /a/ etc....
Reading the query params and reading the dynamic routes

Scenario where response is not being sent - Sending request....
Scenario where one route can have multiple route handlers...
Scenarios where next() is being used in the route handlers..
Sending array of route handlers
What is Middleware?why do we need it?
How express.js handles the requests behind the scenes
Difference between app.use() and app.all()
Write a dummy auth middleware for admin
Write a dummy auth middleware for user routes except /user/login
Maintaining the structured code - for that used middlewares > auth -kept all the auth validations in it

what we did: 
Having the account in mongoDB Atlas... - copy the connection string by going to the database > Clusters > Connect > copy the string
Open the compass - click on the new connection > and create a new connection by pasting the connection string in it
Now connected our application to it..
Created a file database.js under new folder src > config
Installed the mongoose package by running the command "npm install mongoose"
Now by importing it in config file, write the build the connection inside async method..
To run this, made this file available in the app.js
checked and it ran successfully...
Now the problem was.. - 1st server strts then connection establishes...
To make it correct, exported connectDB from the file and added the details in the app.js file where ConnectDB is called, and inside then() server should be running in port 
Created a model folder and user.js inside it > created a user schema and User model and export that
Created POST/ signup api with the static data...
Push some documents using API calls using postman

learn the difference between the Javascript object and JSON
Add the expree.json middleware.
Now get the json data from the outside( postam/ from user)