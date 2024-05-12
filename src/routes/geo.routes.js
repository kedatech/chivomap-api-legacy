import { Router } from 'express';
const router = Router();
import { getMunicipios } from '../services/municipios.services.js';


router.get('/getbyDepartamento', (req, res) => {
  const departamento = req.query.departamento;
  const municipios = getMunicipios(departamento);
  res.json(municipios);
});

router.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

export default router;