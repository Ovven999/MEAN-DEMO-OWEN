const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // token is stored in the header, usally smth like 'Bear adsfhashdf'
  try{
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "secret_this_should_be_longer");
    next();
  } catch (error) {
    res.status(401).json({
      message: "Auth failed"
    });
  }
}
