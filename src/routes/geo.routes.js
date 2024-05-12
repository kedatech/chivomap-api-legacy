import { Router } from 'express';
const router = Router();
import { getMunicipios, getGeoData } from '../services/geo.services.js';


router.get('/getbyDepartamento', (req, res) => {
  const departamento = req.query.departamento;
  const municipios = getMunicipios(departamento);
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