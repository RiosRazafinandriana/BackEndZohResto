const express = require('express');
const { getListMenu, addMenu, updateMenu, deleteMenu } = require('../controller/menu-controller');
const router = express.Router()

router.get('/menu', getListMenu)
router.post('/add_menu', addMenu)
router.put('/menu/:id', updateMenu)
router.delete('menu/:id', deleteMenu)

module.exports = router