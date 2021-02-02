const PirateController = require("../controllers/pirate.controller");

module.exports = (app) => {
    app.get("/api/pirates", PirateController.getAll);
    app.post("/api/pirates",PirateController.create);
    // :id can be whatever just a param var
    app.get("/api/pirates/:id", PirateController.getOne);
    app.put("/api/pirates/:id", PirateController.update);
    app.delete("/api/pirates/:id", PirateController.delete);
}