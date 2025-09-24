const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(token, "secret123"); // JWT secret
    req.user = decoded; // req.user.id se logged-in user ka id milega
    next();
  } catch (err) {
    res.status(401).json({ error: "Token invalid" });
  }
};

module.exports = auth;
