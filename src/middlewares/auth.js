const adminAuth = (req, res, next) => {
    console.log("Admin auth is getting checked...!");
    const token = "xyz"
    const isTokenAuthorized = token === "xyz";
    if (!isTokenAuthorized) {
      return res.status(401).send("Unauthorized access");
    }else {
      console.log("Admin auth is successful...!");
      next();
    }
}
const userAuth = (req, res, next) => {
    console.log("User auth is getting checked...!");
    const token = "xyz"
    const isTokenAuthorized = token === "xyz";
    if (!isTokenAuthorized) {
      return res.status(401).send("Unauthorized access");
    }else {
      console.log("User auth is successful...!");
      next();
    }
}

module.exports = {
    adminAuth,
    userAuth
};