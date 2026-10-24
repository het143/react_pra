const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const allowRoles = require("../middleware/role");
const controller = require("../controllers/blogController");

router.get("/", controller.getAllBlogs);               // public - anyone can read
router.get("/:id", controller.getBlogById);             // public

router.post("/", auth, controller.createBlog);          // must be logged in
router.put("/:id", auth, controller.updateBlog);         // must be logged in + author/admin check inside
router.delete("/:id", auth, allowRoles("user", "admin"), controller.deleteBlog);

module.exports = router;
