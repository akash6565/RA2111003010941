const express = require('express');
const router = express.Router();
const thirdPartyController = require('../controllers/thirdPartyController');
const thirdPartyMiddleware = require('../middlewares/thirdPartyMiddleware');

router.get('/:id', thirdPartyController.fetchNumbers, thirdPartyMiddleware.processNumbers);

module.exports = router;
