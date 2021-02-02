const Pirate = require("../models/pirate.model");

module.exports = {
    getAll: (req,res) => {
        Pirate.find()
            .then((allPirates) => res.json(allPirates))
            .catch((err) => res.json(err))
    },
    create: (req,res) => {
        // req.body is all the NEW info we have recived 
        console.log(req.body)
        Pirate.create(req.body)
            .then((newPirateObj) => res.json(newPirateObj))
            .catch((err) => {
                console.log("Error creating a pirate document: " + err);
                res.json(err);
            })
    },
    getOne: (req,res) => {
        // in routes we got a :id param
        Pirate.findById(req.params.id)
            .then((onePirate) => res.json(onePirate))
            .catch((err) => res.json(err))
    },
    update: (req,res) => {
        // {new: true} keeps all existing info
        Pirate.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then((updatedPirate) => res.json(updatedPirate))
            .catch((err) => res.json(err))
    },
    delete: (req,res) => {
        // {new: true} keeps all existing info
        Pirate.findByIdAndDelete(req.params.id)
            .then((deleted) => res.json(deleted))
            .catch((err) => res.json(err))
    }
};