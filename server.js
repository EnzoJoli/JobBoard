const express = require("express");
const bodyParser = require("body-parser");
const sql = require("./app/models/db");
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const dotenv = require('dotenv');
const { default: jwtDecode } = require("jwt-decode");

dotenv.config();
process.env.TOKEN_SECRET;
const app = express();

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routes/utilisateur.routes.js")(app);
require("./app/routes/advertisement.routes.js")(app);
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

function generateAccessToken(Id) {
	return jwt.sign(Id, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.post('/login', function(req, res) {
	var mail = req.body.email;
	var password = req.body.password;
	if (mail && password) {
		sql.query('SELECT * FROM utilisateur WHERE email = ? AND Password = ?', [mail, password], function(error, results, fields) {
			if (results.length > 0) {
				const token = generateAccessToken({ Id: results[0].ID});
				res.json(token);
			} else {
				res.send('Email et/ou Mot de passe incorrect!');
			}			
			res.end();
		});
	} else {
		res.send("Merci d'entrer un email et/ou un Mot de passe");
		res.end();
	}
});