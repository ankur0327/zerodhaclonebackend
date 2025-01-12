const {model } = require("mongoose");
const { HoldingSchema } = require("../schema/HoldingsSchema");

const HoldingModel = new model("holding" , HoldingSchema);

module.exports ={HoldingModel};