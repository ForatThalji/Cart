const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const knex = require('knex');
const knexConfig = require('./knexfile'); // Import the Knex configuration

const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Initialize Knex
const db = knex(knexConfig.development); // Use the appropriate environment (e.g., development)

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Check Database Connection
db.raw('SELECT NOW()')
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

// Start Server
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
