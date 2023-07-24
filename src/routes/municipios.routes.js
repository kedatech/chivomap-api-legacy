const router = require('express').Router();
const boom = require('@hapi/boom');

router.get('/geojson', (req, res, next) => {
  // todo: enviar el archivo GeoJSON
  try {
    if (req.body == null) {
      throw boom.badRequest('no body required');
    }
    res.json({
      ok: "oks"
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
