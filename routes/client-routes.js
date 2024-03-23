const express = require('express');
const { getListClient, addClient, updateClient, deleteClient } = require('../controller/client-controller');
const router = express.Router()

router.get('/client', getListClient)
router.post('/add_client', addClient)
router.put('/client/:id', updateClient)
router.delete('client/:id', deleteClient)

module.exports = router