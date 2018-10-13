import React from 'react';
import "./mainStyle.css";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid";
import SearchForm from "../SearchForm/SearchForm";
import Card from "../../components/Card";
import { List } from "../../components/List";
import Recipe from "../../components/Recipe";
// import {Link} from 'react-router-dom';

class Main extends React.Component {
    state = {
        recipes: [],
        beer: [],
        search: "",
        ingredients: "",
        title: "",
        food_pairing: "",
        foodArray: [],
        beerPair: [],
        beerArray:[],
        myArray: [],
        message: "",
        value: "",
        Pair: "",
        source_url:"",
        users: [],
        savedRecipe: [],
        f2f_url: [],
    };

    
    componentDidMount(){
        // this.getSavedRecipes();
        // this.loadSavedRecipes();
        document.body.className="body-component-a" // Or set the class
    }

    getSavedRecipes = () => {
        API.getSavedRecipes()
          .then(res =>
            
            this.setState({
                
              recipes: res.data
              
            })
            
          )
          
          .catch(err => console.log(err));
          
      };
    
    saveRecipe = (recipe) => {
        let newRecipe = {
          title: recipe.title,
          // recipe: recipe.recipe,
          source_url: recipe.source_url,
          
        //   is_saved: true
        }
    
        API
          .saveRecipe(newRecipe)
          .then(results => {
            console.log(results);
            
          })
          .catch(err => console.log(err));
      }
    
        
    
    getFood = (keyword) => {
        this.setState({ search: keyword})
       
        
        API.getFood(this.state.search)
        .then(res => {
            
            let {foodArray} = this.state;
                this.state.foodArray.push(res.data);
                console.log(foodArray);
            console.log(res.data.recipes);
            
            this.setState({ recipes: res.data.recipes })
            // this.setState({
            //             //   foodUrl: res.data.f2f_url,  
            //               title: res.data.title,
            //               recipe: res.data.recipes,
            //                 source_url: res.data.source_url,
            //             })
            
        })};
    

    
        
    

        
        getBeer = (keyword) => {
            this.setState({ search: keyword})
            
            // console.log(this.state.search);
            API.getBeer(this.state.search)
            
            .then(res => {
                let {beer} = this.state;
                this.state.beer.push(res.data);
                this.setState({ beerName: res.data[0].name,
                beerId: res.data[0].id,
                beerPair: res.data[0].food_pairing,
                 beerDesc: res.data[0].description,
                 
                 beerImg: res.data[0].image_url,
                 
                })  
                this.setState({ beer: res.data});
            console.log(beer);
            })
                .catch(err => 
                    
                    console.log(err));
                };
                
               
                
                handleInputChange = event => {
                    this.setState({ search: event.target.value });
                  };

                  handleFormSubmit = event => {
                    event.preventDefault();
                    
                    this.getFood();
                    this.getBeer();
                }
                
                
               
            

           
               

          render(){
            return (
               
                <Container >
                   <Jumbotron />
                   
            {/* <Row>
               
                
            <Col size="col-12" >
            <span class="center-block" id="form-group">
               
<SearchForm 
    handleFormSubmit={this.handleFormSubmit}
    handleInputChange={this.handleInputChange}/>
    </span>
</Col>
</Row> */}
<Row>
    <Col size="col-4">
    <Card title="Recipes" >
              {this.state.recipes.length ? (
                <List >
                  {this.state.recipes.map(recipe => (
                    <Recipe
                      key={recipe.recipe_id}
                      _id={recipe.recipe_id}
                      title={recipe.title}
                      source_url={recipe.source_url}
                      handleClick={this.saveRecipe}
                      image_url={recipe.image_url}
                    //   onClick={this.saveRecipe}
                    //   image_url={recipe.image_url}
                    //   handleClick={this.handleRecipesave}
                    //   buttonText="Save Recipe"
                    />
                   
                  ))}
                  
                  {/* <button onClick={this.saveRecipe}>save</button> */}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
    {/* <Card>
        <List> */}
    {/* <div id="recipeCard">
      { this.state.recipes.map(recipes => <li onClick={this.recipeSave} key={recipes.recipe_id} id={recipes.recipe_id}>  {recipes.title}</li>)}
   </div>   */}
 {/* </List>
 </Card> */}
  {/* <div> 
    { this.state.foodArray.map(foodArray => <li  key={foodArray.id} id={foodArray._id}></li>)}
 </div>  */}
 
 <div id="overflow">
 
    { this.state.beerPair.map((beerPair, index) => <a href="https://www.google.com/search?q="  key={index} ><li onClick={this.beerLink} key={index} id={beerPair.beerPair_id} > {beerPair} </li></a>)}
</div>
</Col>
<Col size='col-4'>
<span>
<SearchForm 
    handleFormSubmit={this.handleFormSubmit}
    handleInputChange={this.handleInputChange}/>
    </span>
    </Col>

<Col size="col-4" >
<div className="displayImage">
{/* <div className="col-4"> */}
  {/* <div><h1>{this.state.beerImg}</h1></div> */}
  <div className="frameWork">
  <h1 id="beerName">{this.state.beerName} </h1>
  <img  id="imageHolder"  src={this.state.beerImg} alt="" className="img-responsive" />
  <h2 id="description">{this.state.beerDesc}</h2>
  </div>
{/* </div>  */}
{/* </div> */}
{/* </div> */}
</div> 

</Col>
{/* <Col size="md-4"> */}
           
          {/* </Col> */}
</Row>
{/* </div> */}
</Container>

);
};
};

export default Main;