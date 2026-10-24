const Blog = require("../models/Blog");

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("author", "username");
  res.json(blogs);
};

exports.getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("author", "username");
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};

exports.createBlog = async (req, res) => {
  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    author: req.user.id,
  });
  res.status(201).json(blog);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  // Only the original author OR an admin may update the blog
  if (blog.author.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not authorized to update this blog" });
  }

  blog.title = req.body.title || blog.title;
  blog.content = req.body.content || blog.content;
  await blog.save();
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  // Only the original author OR an admin may delete the blog
  if (blog.author.toString() !== req.user.id && req.user.role !== "admin") {
    return res.status(403).json({ message: "Not authorized to delete this blog" });
  }

  await blog.deleteOne();
  res.json({ message: "Blog deleted successfully" });
};
