const express = require("express");
const mongoose = require("mongoose");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));   // serve uploaded files statically

mongoose.connect("mongodb://localhost:27017/fileUploadDB")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("File Upload (Multer + MongoDB) API is running");
});

app.use("/api", uploadRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Multer / general error handler
app.use((err, req, res, next) => {
  res.status(400).json({ message: err.message });
});

const PORT = 4500;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
