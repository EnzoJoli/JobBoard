module.exports = app => {
    const utilisateur = require("../controller/utilisateur.controller.js");
  
    // Create a new utilisateur
    app.post("/utilisateur", utilisateur.create);
  
    // Retrieve all Customers
    app.get("/utilisateur", utilisateur.findAll);
  
    // Retrieve a single utilisateur with utilisateurId
    app.get("/utilisateur/:utilisateurId", utilisateur.findOne);
  
    // Update a utilisateur with utilisateurId
    app.put("/utilisateur/:utilisateurId", utilisateur.update);
  
    // Delete a utilisateur with utilisateurId
    app.delete("/utilisateur/:utilisateurId", utilisateur.delete);
  
    // Create a new utilisateur
    app.delete("/utilisateur", utilisateur.deleteAll);
};