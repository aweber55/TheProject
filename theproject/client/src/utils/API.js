import axios from "axios";
const API_KEY = "cb2e66a6abeb3b3928d0991bd137e659";

let URL = `https://www.food2fork.com/api/search?key=${API_KEY}`;
const Burl = `https://api.punkapi.com/v2/beers`;
export default {


    getFood: function(topic) {
        console.log(topic);
        return axios.get(`${URL}&q='${topic}'&count=4`);
      },
      getBeer: function() {
          return axios.get(`${Burl}`);
      },
}


