import { readdirSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { Router } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const PATH_ROUTER = __dirname;
const router = Router();

/** Limpiar el nombre de la carpeta routes */
const cleanFileName = (fileName) => fileName.split('.').shift() || '';

/** Leer /routes y usar cada una de las rutas */
readdirSync(PATH_ROUTER).forEach(async (fileName) => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== 'index' && cleanName.length > 0) {
    if (extname(fileName) === '.js') {
      const moduleRoute = await import(`./${fileName}`);
      console.log(`cargando la ruta ${cleanName}`);
      router.use(`/${cleanName}`, moduleRoute.default);
    }
  }
});

export default router;
