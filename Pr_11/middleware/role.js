// Role-Based Access Control: only allow the listed roles to proceed
function allowRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied - insufficient permissions" });
    }
    next();
  };
}

module.exports = allowRoles;
