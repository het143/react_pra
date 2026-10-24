PRACTICAL 9: File Upload Module using Multer and Storing File Metadata in MongoDB
============================================================

AIM:
To create a file upload module in Node.js/Express using Multer middleware to handle `multipart/form-data` uploads, save files to the server's disk, and store each file's metadata (original name, stored name, path, size, MIME type) in MongoDB using Mongoose.

REQUIREMENTS:
- Node.js (v18 or later) and NPM installed
- MongoDB running locally (or a MongoDB Atlas connection string)
- Postman (to test file upload using form-data)
- `express`, `mongoose` and `multer` NPM packages

FILE STRUCTURE:

file-upload-multer/
|-- node_modules/
|-- uploads/                (uploaded files are stored here)
|-- models/
|   `-- File.js
|-- middleware/
|   `-- upload.js
|-- routes/
|   `-- uploadRoutes.js
|-- server.js
|-- package.json
`-- package-lock.json


COMMANDS:

# Create the project folder
mkdir file-upload-multer && cd file-upload-multer

# Initialize the project
npm init -y

# Install dependencies
npm install express mongoose multer

# Create the uploads folder
mkdir uploads

# Run the server
node server.js

WORKFLOW:
1. Create the project folder, run npm init -y, then install express, mongoose and multer.
2. Create an empty uploads/ folder in the project root - this is where Multer will save incoming files.
3. Create models/File.js defining a Mongoose schema to store file metadata (originalName, storedName, path, size, mimeType).
4. Create middleware/upload.js configuring Multer's diskStorage (destination folder and a unique generated filename) plus a fileFilter (allowed extensions) and a file size limit.
5. Create routes/uploadRoutes.js with a POST /upload route using upload.single("file") middleware, which saves the file's metadata to MongoDB via the File model after Multer has stored the file on disk, and a GET /files route to list all stored metadata.
6. Create server.js: connect to MongoDB, serve the uploads folder statically (so files can be viewed/downloaded by URL), and mount the upload routes under /api.
7. Save all files and start the server; test the upload using Postman's **form-data** body type.

EXECUTION:
1. Open a terminal inside file-upload-multer, run npm install, ensure MongoDB is running locally, then run node server.js.
2. Confirm the terminal shows Database Connected and Server running at http://localhost:4500.
3. In Postman, create a POST request to http://localhost:4500/api/upload.
4. Go to the **Body** tab, select **form-data**, add a key named exactly file, change its type from "Text" to "File", and choose a file from disk (e.g. a PDF or image under 5 MB).
5. Click **Send** and confirm the JSON response contains the saved file's metadata.
6. Send a GET request to http://localhost:4500/api/files to confirm the metadata was stored in MongoDB.
7. Open http://localhost:4500/uploads/<storedName> in a browser to confirm the uploaded file itself can be accessed/downloaded.

RESULT:
The file upload module was successfully implemented using Multer for disk storage and file-type/size validation, with corresponding file metadata correctly persisted in MongoDB, meeting the objective of the practical.