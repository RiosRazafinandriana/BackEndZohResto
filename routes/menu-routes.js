const express = require('express');
const { getListMenu, addMenu } = require('../controller/menu-controller');
const router = express.Router()

router.get('/menu', getListMenu)
router.post('/add', addMenu)

module.exports = router