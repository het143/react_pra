PRACTICAL 8: Employee Management API Integrating Express.js with MongoDB Atlas
============================================================

AIM:
To develop a RESTful Employee Management API using ExpressJS and Mongoose, connected to a cloud-hosted MongoDB Atlas cluster, supporting full CRUD operations on employee records.

REQUIREMENTS:
- Node.js (v18 or later) and NPM installed
- A free MongoDB Atlas account and a cluster (https://www.mongodb.com/cloud/atlas)
- The cluster's connection string, with the Atlas IP access list configured to allow the developer's machine (or 0.0.0.0/0 for testing)
- Postman (for API testing)
- `express`, `mongoose` and `dotenv` NPM packages

FILE STRUCTURE:

employee-management-api/
|-- node_modules/
|-- config/
|   `-- db.js
|-- models/
|   `-- Employee.js
|-- controllers/
|   `-- employeeController.js
|-- routes/
|   `-- employeeRoutes.js
|-- .env
|-- server.js
|-- package.json
`-- package-lock.json


COMMANDS:

# Create the project folder
mkdir employee-management-api && cd employee-management-api

# Initialize the project
npm init -y

# Install dependencies
npm install express mongoose dotenv

# Run the server
node server.js

WORKFLOW:
1. Create a free cluster on **MongoDB Atlas**, create a database user (username/password), and whitelist the development machine's IP address under Network Access.
2. Copy the Atlas **connection string** and create the project folder with npm init -y, then install express, mongoose and dotenv.
3. Create a .env file in the project root with PORT and MONGO_URI (paste the Atlas connection string, replacing <username>, <password> and the database name).
4. Create config/db.js with a connectDB() function that calls mongoose.connect() using process.env.MONGO_URI.
5. Create models/Employee.js defining the employee schema (name, email, department, salary) with Mongoose.
6. Create controllers/employeeController.js with async CRUD functions using Mongoose model methods (find, findById, create, findByIdAndUpdate, findByIdAndDelete).
7. Create routes/employeeRoutes.js mapping HTTP methods to controller functions.
8. Create server.js: load .env with dotenv, connect to the database via connectDB(), mount the employee routes, and start the server.
9. Save all files and start the server; test every endpoint in Postman.

EXECUTION:
1. Open a terminal inside employee-management-api and run npm install.
2. Make sure .env contains a valid MongoDB Atlas connection string.
3. Run node server.js - the terminal should print both MongoDB Atlas Connected and Server running at http://localhost:5000.
4. In Postman, send a POST request to http://localhost:5000/api/employees with a JSON body to create a new employee.
5. Send a GET request to the same URL to confirm the employee was stored.
6. Test PUT and DELETE on http://localhost:5000/api/employees/:id using the _id returned by MongoDB.
7. Optionally, open the Atlas dashboard -> Collections to see the employees collection and documents directly in the cloud database.

RESULT:
The Employee Management API was successfully built with Express.js and Mongoose, connected to a MongoDB Atlas cluster, and all CRUD operations were verified through Postman and the Atlas dashboard, meeting the objective of the practical.