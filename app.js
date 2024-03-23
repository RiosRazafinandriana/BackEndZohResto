const express = require('express');
const cors = require('cors');
const { Client } = require('pg');

const app = express()
app.use(express.json())
app.use(cors())

//Connection BD
const client = new Client({
	user: 'postgres',
	password: 'mikhail',
	host: 'localhost',
	port: '5432',
	database: 'zoh_resto',
});

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected !!!");
})


app.listen(3030, () => {
    console.log("Connected to the backend !");
})

//Endpoints
app.get("/", (req,res) => {
    res.json("Accueil !!!")
})

app.get("/menu", (req,res) => {
    client.query('SELECT * FROM menu', (err, result) => {
        if (err) {
            console.error('Error executing query', err);
        } else {
            const data = result.rows;
            res.json(data);
        }
    });
})

/*app.post("/menu", (req,res) => {
    client
	.then(() => {
		const q = 'INSERT INTO menu(nom_menu, prix_menu) VALUES (?)';
		const values = [
            req.body.nom_menu,
            req.body.prix_menu
        ];

		client.query(q, values, (err, result) => {
			if (err) {
				console.error('Error inserting data', err);
			} else {
				res.json("Le plat a bien été ajouté !")
			}
		});
	})
	.catch((err) => {
		console.error('Error connecting to PostgreSQL database', err);
	});
})*/

app.post("/menu", (req,res) => {
        const q = 'INSERT INTO menu(nom_menu, prix_menu) VALUES (?)';
		const values = [
            req.body.nom_menu,
            req.body.prix_menu
        ];

		client.query(q, values, (err) => {
			if (err) {
				console.error('Error inserting data', err);
			} else {
				res.json("Le plat a bien été ajouté !")
			}
		});
	})