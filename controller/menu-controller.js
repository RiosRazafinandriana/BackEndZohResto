const db = require('../database/connection')

const getListMenu = async (req,res)=>{
    await db.query('SELECT * FROM menu', (err, result) => {
		if (err) {
			console.error('Error executing query', err);
        } else {
			const data = result.rows;
            res.json(data);
        }
    });
}

const addMenu = async (req,res)=>{
    const q = 'INSERT INTO menu(nom_menu, prix_menu) VALUES (?)';
	const values = [
		req.body.nom_menu,
		req.body.prix_menu
	];
	
	await db.query(q, values, (err) => {
		if (err) {
			console.error('Error inserting data', err);
		} else {
			res.json("Le plat a bien été ajouté !")
		}
	});
}

module.exports = { getListMenu, addMenu }