const db = require('../database/connection')

const getListClient = async (req,res)=>{
    await db.query('SELECT * FROM client', (err, result) => {
		if (err) {
			console.error('Error executing query', err);
        } else {
			const data = result.rows;
            res.json(data);
        }
    });
}

const addClient = async (req,res)=>{
    const q = 'INSERT INTO client(nom,adresse,contact) VALUES (?)';
	const values = [
		req.body.nom,
		req.body.adresse,
        req.body.contact
	];
	
	await db.query(q, values, (err) => {
		if (err) {
			console.error('Error inserting data', err);
		} else {
			res.json("Le client a bien été ajouté !")
		}
	});
}

const updateClient = async (req,res) => {
    const id_client = req.params.id;
    const q = "UPDATE client SET `nom`=?,`adresse`=?,`contact`=? WHERE id_client=?";
    const values = [
        req.body.nom,
        req.body.adresse,
        req.body.contact
    ];

    db.query(q, [...values,id_plat], (err,data) => {
        if (err) return res.json(err);
        return res.json("Les informations du client ont été modifié avec succès")
    });
} 

const deleteClient = async (req,res) => {
    const id_client = req.params.id;
    const q = "DELETE FROM client WHERE id_client = ?";

    db.query(q, [id_client], (err,data) => {
        if (err) return res.json(err);
        return res.json("Le client a été supprimé avec succès")
    });
}

module.exports = { getListClient, addClient, updateClient, deleteClient }