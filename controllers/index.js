const router = require('express').Router()
const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes.js')
const express = require('express');
const app = express();
app.use(express.static('assets'));
router.use('/', homeRoutes)
router.use('/api',apiRoutes)
module.exports = router 