const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new Schema({
  
  title: { type: String, required: true },
  source_url: { type: String, required: true },
  // recipe: {type: String, required: true},

  
}, { _id: false });

module.exports = mongoose.model("Recipe", Recipe);
