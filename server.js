const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Students Model
const Students = require('./models/Students');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to MongoDB
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Retrieves all students from mongoDB
app.get('/students', (req, res) => {
  Students.find().then((student) => {
    res.send({
      success: true,
      student: student,
    });
  });
});

// Create a student in mongoDB
app.post('/students', (req, res, next) => {
  Students.create(req.body).then((student) => {
    res.send({
      success: true,
      student: student,
    });
  });
});

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(` 🔥Server running on port ${PORT}🔥 `)
);

// Handle unhandled promises
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server
  server.close(() => process.exit);
});
