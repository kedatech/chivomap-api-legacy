import express from 'express'
import cors from 'cors'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middlewar
const whitelist = ['http://localhost:3000', 'https://chivomap.vercel.app'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      console.log('forbidden')
      // todo: callback(new Error(boom.forbidden('Access denied due to CORS security restrictions')));
    }
  }
}
app.use(cors(options));

export default app