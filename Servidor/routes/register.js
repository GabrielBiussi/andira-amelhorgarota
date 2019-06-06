const express = require('express');
const router = express.Router();
const Database = require('../Database');
const isNull = require('../script').isNull;
const config = require('../config');

router.post('/', (req, res, next) => {

	// Chamando função que iniciará inserts em cadeia
	criarUsuario(req, res);


});

// Função para criar usuario 
function criarUsuario(req, res) {

		let querystring = `INSERT INTO arcarum values ('${Number(req.body.idean)}', '${Number(req.body.astra)}', '${Number(req.body.sephira)}','${Number(req.body.frags)}','${Number(req.body.proofs)}')`;
		Database.query(querystring).then(results => {
			
			console.log("registro criado!");
			res.status(200).send('ok');
		}).catch(error => {
			res.status(200).send('erro1');
			console.error(error);
		});

}

module.exports = router;