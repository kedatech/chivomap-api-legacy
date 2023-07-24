const router = require('express').Router();
const boom = require('@hapi/boom');
const { validationSchema } = require('../../middlewares/validatorHandler')
const { get } = require('../schemas/municipios.schema');

router.get('/geojson/:id', validationSchema(get, 'params')
  ,(req, res, next) => {
    // todo: enviar el archivo GeoJSON
    try {
      console.log(req.body);
      if (req.body == null) {
        throw boom.badRequest('no body required');
      }
      res.json({
        ok: "oks",
        id: req.params.idw
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
