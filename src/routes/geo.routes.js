import { Router } from 'express';
const router = Router();
import { getMunicipios, getGeoData } from '../services/geo.services.js';


router.get('/filter', (req, res) => {
  const query = req.query.query;
  const whatIs = req.query.whatIs;
  const municipios = getMunicipios(query, whatIs);
  res.json(municipios);
});

router.get('/getGeoData', (req, res) => {
  const data = getGeoData();
  res.json(data);
});

router.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

export default router;