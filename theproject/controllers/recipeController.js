const db = require("../models");




module.exports = {
create: function(req, res) {
    const recipe = {
      // _id: req.body._id,
      // title: req.body.title,
      // source_url: req.body.source_url,
      recipe: req.body.recipe,
      
    };
    db.Recipe
      .create(recipe)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },
}