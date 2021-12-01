const Advertisement = require("../models/advertisement.model");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const advertisement = new Advertisement({
      Descriptif: req.body.Descriptif,
      Contrat: req.body.Contrat,
      Lieu: req.body.Lieu,
      Date: req.body.Date,
      Remuneration: req.body.Remuneration,
      Entreprise: req.body.Entreprise,
      Titre: req.body.Titre
    });
  
    // Save Customer in the database
    Advertisement.create(advertisement, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Customer."
        });
      else res.send(data);
    });
  };

exports.findAll = (req, res) => {
    Advertisement.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      else res.send(data);
    });
  };
  exports.findOne = (req, res) => {
    Advertisement.findById(req.params.advertisementId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Aucun advertisement trouver avec l'id ${req.params.advertisementId}.`
          });
        } else {
          res.status(500).send({
            message: "Erreur impossible de trouver l'advertisement " + req.params.advertisementId
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
    
      Advertisement.updateById(
        req.params.advertisementId,
        new Advertisement(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Advertisement with id ${req.params.advertisementId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Advertisement with id " + req.params.advertisementId
              });
            }
          } else res.send(data);
        }
      );
    };
    exports.delete = (req, res) => {
      Advertisement.remove(req.params.advertisementId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Advertisement with id ${req.params.advertisementId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Advertisement with id " + req.params.advertisementId
            });
          }
        } else res.send({ message: `Advertisement was deleted successfully!` });
      });
    };
    exports.deleteAll = (req, res) => {
      Advertisement.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Des erreurs sont arrive lors de la supression de tout les advertisement."
          });
        else res.send({ message: `Tout les advertisement ont ete suprime!` });
      });
    };