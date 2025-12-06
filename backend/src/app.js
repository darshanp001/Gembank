// app.js
const path = require('path');

// Set the NODE_ENV to 'development' by default if it's not already set
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Determine which .env file to load
const envFile = `.env.${process.env.NODE_ENV}`;

// Configure dotenv
require('dotenv').config({
  path: path.resolve(process.cwd(), envFile)
});

// Now you can use the environment variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const APP_URL = process.env.APP_URL;

app.get('/', (req, res) => {
  res.send(`Hello! The current environment is: ${process.env.NODE_ENV}. The app URL is `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port `);
  console.log(`App URL is configured as: `);
});
