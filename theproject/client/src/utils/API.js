import axios from "axios";
const API_KEY = "cb2e66a6abeb3b3928d0991bd137e659";
// https://api.punkapi.com/v2/beers?food=shrimp
let URL = `https://www.food2fork.com/api/search?key=${API_KEY}`;
const Burl = "https://api.punkapi.com/v2/beers";

export default {

    getFood: function(topic) {
        // console.log(topic);
       
        return axios.get(`${URL}&q="${topic}"&count=6`);
      },
      getBeer: function(topic) {
          return axios.get(`${Burl}?food=${topic}`);
          
      },
      createRecipes: function(recipes){
          return axios.post("/", recipes);
      },
      //this will save one recipe with an id as it is currently written.
      saveRecipe: function(recipes) {
        console.log("saved");
        return axios.post("/api/savedrecipes", recipes);
        
        
      },
      getSearch: function(topic) {
          return axios.get(`https://www.google.com/search?q=${topic}`);
      },
      getUsers: function() {
          return axios.get("/api/users");
          
      },
      getSavedRecipes: function() {
        return axios.get("/api/recipes"); 
      }
};


