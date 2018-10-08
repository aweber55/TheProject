module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const recipeController = require("../controllers/recipeController");


	// add any API routes here
	router.route("/")
	// .get(recipeController.findAll)
	.post(recipeController.create);
  
  // Matches with "/api/articles/:id"
  router
	.route("/:id")
	// .get(recipeController.findById)
	// .put(recipeController.update)
	// .delete(recipeController.remove);
  

	return router;
};