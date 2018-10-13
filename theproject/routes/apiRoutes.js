module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const recipeController = require("../controllers/recipeController");
	const userController = require("../controllers/userController.js")

	// add any API routes here
	router.route("/recipes")
	.get(recipeController.findAll)
	.post(recipeController.create);
	console.log("got to the other one")
	
	router.route("/users")
	.get(userController.findAll);
	console.log("got to api routes")


  // Matches with "/api/articles/:id"
  router
	.route("/:id")
	// .get(recipeController.findById)
	// .put(recipeController.update)
	// .delete(recipeController.remove);
  

	return router;
	
};