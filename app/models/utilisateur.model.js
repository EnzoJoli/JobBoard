const sql = require("./db.js");

// constructor
const Utilisateur = function(utilisateur) {
  this.email = utilisateur.email;
  this.Nom = utilisateur.Nom;
  this.Prenom = utilisateur.Prenom;
  this.Password = utilisateur.Password;
  this.Age = utilisateur.Age;
  this.sexe = utilisateur.sexe;
  this.Diplome = utilisateur.Diplome;
  this.Competence = utilisateur.Competence;
  this.Experience = utilisateur.Experience;
  if (utilisateur.employer = 1)
    this.IsRecruiting = true;
  else this.IsRecruiting = false;
};

Utilisateur.create = (newUtilisateur, result) => {
  sql.query("INSERT INTO utilisateur SET ?", newUtilisateur, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created utilisateur: ", { id: res.insertId, ...newUtilisateur });
    result(null, { id: res.insertId, ...newUtilisateur });
  });
};

Utilisateur.findById = (utilisateurId, result) => {
  sql.query(`SELECT * FROM utilisateur WHERE id = ${utilisateurId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found utilisateur: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found utilisateur with the id
    result({ kind: "not_found" }, null);
  });
};

Utilisateur.getAll = result => {
  sql.query("SELECT * FROM utilisateur", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("utilisateur: ", res);
    result(null, res);
  });
};

Utilisateur.updateById = (id, utilisateur, result) => {
  sql.query(
    "UPDATE utilisateur SET email = ?, Nom = ?, Prenom = ?, Age = ?, sexe = ?, Diplome = ?, competence = ?, Experience = ?, Password = ? WHERE id = ?",
    [utilisateur.email, utilisateur.Nom, utilisateur.Prenom, utilisateur.Age, utilisateur.sexe, utilisateur.Diplome, utilisateur.Competence, utilisateur.Experience, utilisateur.Password, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found utilisateur with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated utilisateur: ", { id: id, ...utilisateur });
      result(null, { id: id, ...utilisateur });
    }
  );
};

Utilisateur.remove = (id, result) => {
  sql.query("DELETE FROM utilisateur WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found utilisateur with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted utilisateur with id: ", id);
    result(null, res);
  });
};

Utilisateur.removeAll = result => {
  sql.query("DELETE FROM utilisateur", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`suprimer ${res.affectedRows} utilisateur`);
    result(null, res);
  });
};

module.exports = Utilisateur;
