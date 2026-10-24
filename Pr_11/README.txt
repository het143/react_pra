PRACTICAL 11: Blog Management System Implementing CRUD Operations, Authentication and Role-Based Access Control
============================================================

AIM:
To build a Blog Management System backend using Express.js and MongoDB that implements full CRUD operations on blog posts, JWT-based authentication (register/login with hashed passwords), and Role-Based Access Control (RBAC) so that only the author or an admin can update/delete a blog post, while only an admin can delete any post.

REQUIREMENTS:
- Node.js (v18 or later) and NPM installed
- MongoDB running locally (or MongoDB Atlas)
- Postman (for API testing, including setting Authorization headers)
- `express`, `mongoose`, `bcryptjs`, `jsonwebtoken` NPM packages

FILE STRUCTURE:

blog-management-system/
|-- node_modules/
|-- models/
|   |-- User.js
|   `-- Blog.js
|-- middleware/
|   |-- auth.js
|   `-- role.js
|-- controllers/
|   |-- authController.js
|   `-- blogController.js
|-- routes/
|   |-- authRoutes.js
|   `-- blogRoutes.js
|-- server.js
|-- package.json
`-- package-lock.json


COMMANDS:

# Create the project folder
mkdir blog-management-system && cd blog-management-system

# Initialize the project
npm init -y

# Install dependencies
npm install express mongoose bcryptjs jsonwebtoken

# Run the server
node server.js

WORKFLOW:
1. Create the project folder, run npm init -y, then install express, mongoose, bcryptjs and jsonwebtoken.
2. Create models/User.js (username, hashed password, role: user/admin) and models/Blog.js (title, content, author referencing a User).
3. Create middleware/auth.js - verifies the JWT from the Authorization: Bearer <token> header and attaches the decoded {id, role} to req.user.
4. Create middleware/role.js - a reusable allowRoles(...roles) function that blocks the request with 403 unless req.user.role is in the allowed list.
5. Create controllers/authController.js with register (hashes the password with bcrypt before saving) and login (compares the password hash and issues a signed JWT).
6. Create controllers/blogController.js with full CRUD; updateBlog/deleteBlog check that the logged-in user is either the blog's author or has the admin role before proceeding.
7. Create routes/authRoutes.js and routes/blogRoutes.js, protecting the write routes with the auth middleware (and deleteBlog additionally with allowRoles).
8. Create server.js connecting to MongoDB and mounting both route files.
9. Save all files, start the server, and test registration, login and the protected blog routes in Postman.

EXECUTION:
1. Open a terminal inside blog-management-system, run npm install, ensure MongoDB is running, then run node server.js.
2. In Postman, POST to http://localhost:6000/api/auth/register with { "username": "rahul", "password": "pass123", "role": "user" }.
3. POST to http://localhost:6000/api/auth/login with the same username/password - copy the token from the response.
4. POST to http://localhost:6000/api/blogs with a JSON body (title, content); in the **Authorization** tab, choose **Bearer Token** and paste the copied token.
5. Try the same POST **without** the token - it should be rejected with 401.
6. Register a second user with "role": "admin", log in as the admin, and confirm the admin can DELETE a blog that was created by the first (rahul) user.

RESULT:
The Blog Management System backend was successfully implemented with full CRUD operations, JWT-based authentication with hashed passwords, and role-based access control distinguishing between a blog's author, other regular users, and admins, meeting the objective of the practical.