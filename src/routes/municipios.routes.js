const router = require('express').Router();

router.get('/geojson', (req, res) => {
  // todo: enviar el archivo GeoJSON
  res.json({
    ok: "oks"
  });
});

module.exports = router;
