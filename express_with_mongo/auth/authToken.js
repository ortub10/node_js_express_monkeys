const jwt = require("jsonwebtoken");

exports.authRoken = (req, res, next) => {
  let token = req.header("x-api-key");
  if (!token) {
    return res.status(401).json({ msg: "You must send token" });
  }
  try {
    let decodeToken = jwt.verify(token, "TRON1234");
    req.tokenData = decodeToken;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "token invalid or expired" });
  }
};
