const isAdminAuthorized = (req, res, next) => {
    const token = "xyz"
    const isAdminAuthorized = token === "xyz"
    if (!isAdminAuthorized) {
        res.status(401).json({ error: "Unauthorized admin" });
    } else {
        next();
    }
}
const isUserAuthenticated = ( req, res, next) => {
    const token = "abc"
    const isUserAuthenticated = token === "abc"
    if(!isUserAuthenticated) {
        res.status(401).json({ error: "Unauthorized User" });    
    } else {
        next();
    }
}

module.exports = {
    isAdminAuthorized,
    isUserAuthenticated
}