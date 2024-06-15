import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();
const whitelist = ['http://localhost:3000', 'https://chivomap.vercel.app', 'https://chivomap.com'];
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

export default app;
