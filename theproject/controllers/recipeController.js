const db = require("../models");




module.exports = {
  create: function(req, res) {
    db.Recipe
      .create(req.body)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.Recipe
      .find(req.query)
      .sort({ date: -1 })
      .then((dbRecipe) => {
        // res.json({message:"it worked"})
        res.json(dbRecipe);
      })
      .catch(err => res.status(422).json(err));
     
  },
// create: function(req, res) {
//     const recipe = {
      
//       title: req.body.title,
//       source_url: req.body.source_url,
//       recipe: req.body.recipe,
      
//     };
//     db.Recipe
//       .create(recipe)
//       .then(dbRecipe => res.json(dbRecipe))
//       .catch(err => res.status(422).json(err));
//   },

}