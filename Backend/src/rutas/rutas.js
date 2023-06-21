const router = require('express').Router();
const { getSql, getMongo } = require('../controllers/control');

router.get('/check-mysql-connection', getSql)

router.get('/check-mongodb-connection', getMongo)

module.exports = router;