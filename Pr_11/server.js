const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/blogDB")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
