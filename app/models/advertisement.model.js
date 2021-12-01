const sql = require("./db.js");

// constructor
const Advertisement = function(advertisement) {
  this.descriptif = advertisement.Descriptif;
  this.contrat = advertisement.Contrat;
  this.lieu = advertisement.Lieu;
  this.date = advertisement.Date;
  this.remuneration = advertisement.Remuneration;
  this.entreprise = advertisement.Entreprise;
  this.titre = advertisement.Titre;
};

Advertisement.create = (newAd, result) => {
  sql.query("INSERT INTO advertisements SET ?", newAd, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created advertisement: ", { id: res.insertId, ...newAd });
    result(null, { id: res.insertId, ...newAd });
  });
};

Advertisement.findById = (advertisementId, result) => {
  sql.query(`SELECT * FROM advertisements WHERE id = ${advertisementId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found advertisement: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found advertisement with the id
    result({ kind: "not_found" }, null);
  });
};

Advertisement.getAll = result => {
  sql.query("SELECT * FROM advertisements", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};

Advertisement.updateById = (id, advertisement, result) => {
  sql.query(
    "UPDATE advertisements SET email = ?, name = ?, active = ? WHERE id = ?",
    [advertisement.email, advertisement.name, advertisement.active, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found advertisement with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated advertisement: ", { id: id, ...advertisement });
      result(null, { id: id, ...advertisement });
    }
  );
};

Advertisement.remove = (id, result) => {
  sql.query("DELETE FROM advertisements WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found advertisement with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted advertisements with id: ", id);
    result(null, res);
  });
};

Advertisement.removeAll = result => {
  sql.query("DELETE FROM advertisments", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} customers`);
    result(null, res);
  });
};

module.exports = Advertisement;