const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { boomErrorHandler } = require('../middlewares/errorHandler')

const app = express();
const whitelist = ['http://localhost:3000', 'https://chivomap.vercel.app'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Access denied due to CORS security restrictions'));
    }
  }
};

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// Rutas
app.use('/api', routes);

app.use(boomErrorHandler);

module.exports = app;
