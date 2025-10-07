require('dotenv').config();
const express = require('express');

const userRoutes = require('./routes/userRoutes');        // Dev 1 User APIs
const taskRoutes = require('./routes/taskRoutes');        // Dev 2 Task APIs
const projectRoutes = require('./routes/projectRoutes');  // Dev 3 Project APIs

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount API routes under /api
app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/api', projectRoutes);

// Handle unknown routes with 404 JSON response
app.use((req, res) => {
  res.status(404).json({ success: false, errors: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(err.status || 500).json({
    success: false,
    errors: err.errors || err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
