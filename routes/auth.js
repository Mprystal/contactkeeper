const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Get logged in user');
});

router.post('/', (req, res) => {
  res.send('Logged in user');
});

module.exports = router;
