const Utilisateur = require("../models/utilisateur.model");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Utilisateur
    const utilisateur = new Utilisateur({
      email: req.body.email2,
      Nom: req.body.nom,
      Prenom: req.body.prenom,
      Password: req.body.password2
    });
  
    // Save Utilisateur in the database
    Utilisateur.create(utilisateur, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Des erreurs sont apparues lors de la creation d'utilisateur."
        });
      else res.send(data);
    });
  };

exports.findAll = (req, res) => {
    Utilisateur.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Des erreurs sont apparues lors de la recherche d'utilisateur"
        });
      else res.send(data);
    });
  };
exports.findOne = (req, res) => {
  Utilisateur.findById(req.params.utilisateurId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Aucun utilisateur trouver avec l'id ${req.params.utilisateurId}.`
        });
      } else {
        res.status(500).send({
          message: "Erreur impossible de trouver l'utilisateur " + req.params.utilisateurId
        });
      }
    } else res.send(data);
  });
};
  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Utilisateur.updateById(
      req.params.utilisateurId,
      new Utilisateur(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Utilisateur with id ${req.params.utilisateurId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Utilisateur with id " + req.params.utilisateurId
            });
          }
        } else res.send(data);
      }
    );
  };
  exports.delete = (req, res) => {
    Utilisateur.remove(req.params.utilisateurId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Utilisateur with id ${req.params.utilisateurId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Utilisateur with id " + req.params.utilisateurId
          });
        }
      } else res.send({ message: `Utilisateur was deleted successfully!` });
    });
  };
  exports.deleteAll = (req, res) => {
    Utilisateur.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Des erreurs sont arrive lors de la supression de tout les utilisateur."
        });
      else res.send({ message: `Tout les utilisateur ont ete suprime!` });
    });
  };