const express = require('express');
const cors = require('cors');
const routes_menu = require('./routes/menu-routes')
const routes_client = require('./routes/client-routes')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api', routes_menu)
app.use('/api', routes_client)

app.listen(3030, () => {
	console.log("Connected to the backend !");
})