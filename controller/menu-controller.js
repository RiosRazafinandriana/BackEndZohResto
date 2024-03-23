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
    const q = 'INSERT INTO menu(nom_plat, prix_plat, image) VALUES (?)';
	const values = [
		req.body.nom_plat,
		req.body.prix_plat,
        req.body.image
	];
	
	await db.query(q, values, (err) => {
		if (err) {
			console.error('Error inserting data', err);
		} else {
			res.json("Le plat a bien été ajouté !")
		}
	});
}

const updateMenu = async (req,res) => {
    const id_plat = req.params.id;
    const q = "UPDATE menu SET `nom_plat`=?,`prix_plat`=?,`image`=? WHERE id_plat=?";
    const values = [
        req.body.nom_plat,
        req.body.prix_plat,
        req.body.image
    ];

    db.query(q, [...values,id_plat], (err,data) => {
        if (err) return res.json(err);
        return res.json("Le plat a été modifié avec succès")
    });
} 

const deleteMenu = async (req,res) => {
    const id_plat = req.params.id;
    const q = "DELETE FROM menu WHERE id_plat = ?";

    db.query(q, [id_plat], (err,data) => {
        if (err) return res.json(err);
        return res.json("Le plat a été supprimé avec succès")
    });
}

module.exports = { getListMenu, addMenu, updateMenu, deleteMenu }