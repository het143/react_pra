const jwt = require("jsonwebtoken");

const JWT_SECRET = "blog_app_secret_key";   // move to an environment variable in production

// Verifies the JWT sent in the Authorization header and attaches the user to req
function auth(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;   // { id, role }
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
}

module.exports = { auth, JWT_SECRET };
