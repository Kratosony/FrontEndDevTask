const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Node Server is running');
});

module.exports = router;