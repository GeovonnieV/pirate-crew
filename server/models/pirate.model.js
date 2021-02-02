const mongoose = require("mongoose");

const PiratesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "pirate must have name"],
        minlength: [3, "Your pirate must be atleast 3 characters"],
    },
    numberOfTreasureChest: {
        type: Number,
        required: [true, "A pirate must have booty"]
    },
    crewPosition: {
        type: String,
        required: [true, "have to work to sail aboard me ship"]
    },
    hasPegLeg: {
        type: Boolean,
        default: true,
        required: [true, "need to know for union reasons"] 
    },
    hasEyePatch: {
        type: Boolean,
        default: true ,
        required:  [true, "need to know for union reasons"]
    },
    hasHookHand: {
        type: Boolean,
        default: true ,
        required:  [true, "need to know for union reasons"]
    },
    catchPhrase: {
        type: String,
        minlength: 5,
        required: [true, "arge u need a phrase lady"]
    },
    pirateImage: {
        type: String
    }
}, 
{
    timestamps: true
});

const Pirate = mongoose.model("Pirate", PiratesSchema);

module.exports = Pirate;