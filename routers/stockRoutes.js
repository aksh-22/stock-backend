const express = require('express');

const stockController = require('../controller/stockController');

const router = express.Router();

router.get('/getstocks', stockController.getAllStock);
router.post('/poststocks', stockController.createStock);
router.delete('/deletestocks/:id', stockController.delete);

module.exports = router;
