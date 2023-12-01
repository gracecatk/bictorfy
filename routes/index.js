// /routes/index.js
const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.getMainPage);
router.post('/add-song', mainController.addSong);

module.exports = router;
