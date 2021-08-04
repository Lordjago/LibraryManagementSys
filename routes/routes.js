const express = require('express');

const appController = require('../controller/controller');

const router = express.Router();


router.get('/', appController.getIndex);

// router.post('/api/lease', appController.postBorrowBook)



module.exports = router;