const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // _id: { type: Schema.Types.ObjectId, required: true },
  // title: { type: String, required: true },
  // source_url: { type: String, required: true },
  recipe: {type: String, required: true},

  
}, { _id: false });

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
