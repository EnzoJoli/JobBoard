module.exports = app => {
    const advertisement = require("../controller/advertisement.controller.js");
  
    // Create a new utilisateur
    app.post("/advertisement", advertisement.create);
  
    // Retrieve all Customers
    app.get("/advertisement", advertisement.findAll);
  
    // Retrieve a single utilisateur with advertisementId
    app.get("/advertisement/:advertisementId", advertisement.findOne);
  
    // Update a utilisateur with advertisementId
    app.put("/advertisement/:advertisementId", advertisement.update);
  
    // Delete a utilisateur with advertisementId
    app.delete("/advertisement/:advertisementId", advertisement.delete);
  
    // Create a new utilisateur
    app.delete("/advertisement", advertisement.deleteAll);
};