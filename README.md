Recipes App API
A full-stack backend application built with Node.js, Express, and MongoDB. This API allows users to Create, Read, Update, and Delete (CRUD) cooking recipes.

🚀 Features
POST /api/recipes - Add a new recipe to the database.

GET /api/recipes - Retrieve all saved recipes.

GET /api/recipes/:id - Retrieve a single recipe by its ID.

PUT /api/recipes/:id - Update an existing recipe.

DELETE /api/recipes/:id - Remove a recipe from the database.

🛠️ Tech Stack
Backend: Node.js & Express.js.

Database: MongoDB Atlas (Cloud).

ODM: Mongoose.

Testing: Postman.

📋 Prerequisites
Node.js installed on your machine.

MongoDB Atlas account or local MongoDB Compass.

⚙️ Setup Instructions
Clone the repository:

Install dependencies:

Environment Variables: Create a .env file and add your MongoDB connection string:

Run the server:

The server will start on http://localhost:5000.

🧪 Testing with Postman
A Postman Collection is included in this submission. To test the API:

Import the .json collection file into Postman.

Set the request method (GET, POST, etc.).

Ensure the Postman Desktop Agent is running to connect to localhost.