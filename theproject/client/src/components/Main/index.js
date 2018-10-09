import React from 'react';
import "./style.css";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid";
import SearchForm from "../SearchForm/SearchForm";
import Card from "../../components/Card";
import { List } from "../../components/List";
import Recipe from "../../components/Recipe";
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
    };

    
    componentDidMount(){
       
        document.body.className="body-component-a" // Or set the class
    }

    // resetValue = (event) => {
    //     this.setState({
    //         value: ""
    //     });
    // }
    recipeSave = (id) => {
        const recipes = this.state.recipes.create(recipes);
        API.saveRecipe(recipes)
        .then(res => this.getFood());
        console.log(recipes);
    }
    
    getFood = (keyword) => {
        this.setState({ search: keyword})
        // console.log(this.state.search);
        API.getFood(this.state.search)
        .then(res => {
            
            console.log(res.data);
            // const recipes = res.data.recipes;
            
            this.setState({ recipes: res.data.recipes });
        })};
    // getFood = (keyword) => {
    //     this.setState({ search: keyword })
    //     API.getFood({
            
    //       title: this.state.title,
    //       recipe: this.state.recipes,
         
         
    //     })
    //       .then(res =>
    //         this.setState({
    //           title: res.data.title,
    //           recipe: res.data.recipes
                
    //         })
    //       )
    //       .catch(err => console.log(err));
    //   };

        
        getBeer = (keyword) => {
            this.setState({ search: keyword})
            const byArray = [];
            console.log(this.state.search);
            API.getBeer(this.state.search)
            
            .then(res => {
                console.log(res.data[0]);
                
                this.setState({ myArray: byArray});
                
                this.setState({ beerName: res.data[0].name,
                beerId: res.data[0].id,
                beerPair: res.data[0].food_pairing,
                 beerDesc: res.data[0].description,
                 
                 beerImg: res.data[0].image_url,
                 
                })  
                
            })
                .catch(err => 
                    
                    console.log(err));
                
            };
                
            
            
        handleInputChange = event => {
            this.setState({ search: event.target.value });
          };
          handleFormSubmit = event => {
            event.preventDefault();
            
            // this.resetValue();
            this.getFood();
            this.getBeer();
          };

          render(){
            return (
               
                <Container>
                   <Jumbotron />
                    <div className="main">
            <Row>
                <div className="col-4"></div>
                
                <Col size="col-4">

                <div className="results">
<SearchForm 
    handleFormSubmit={this.handleFormSubmit}
    handleInputChange={this.handleInputChange}/>
    
    {/* <Card>
        <List>
  <div id="recipeCard">
    { this.state.recipes.map(recipes => <li onClick={this.recipeSave} key={recipes.recipe_id} id={recipes.recipe_id}>  {recipes.title}</li>)}
 </div>  
 </List>
 </Card> */}
  {/* <div> 
    { this.state.foodArray.map(foodArray => <li  key={foodArray.id} id={foodArray._id}></li>)}
 </div>  */}
 <div id="overflow">
    { this.state.beerPair.map((beerPair, index) => <li key={index} id={beerPair.beerPair_id} > {beerPair} </li>)}
</div>



<div className="col-4">
  {/* <div><h1>{this.state.beerImg}</h1></div> */}
  
  <div><h1 id="beerName">{this.state.beerName} </h1></div>  
  <img  id="imageHolder"  src={this.state.beerImg} alt="" className="img-responsive" />
</div> 
</div>
</Col>
<Col size="md-4">
            <Card title="Results">
              {this.state.recipes.length ? (
                <List>
                  {this.state.recipes.map(recipe => (
                    <Recipe
                      key={recipe.recipe_id}
                      _id={recipe.recipe_id}
                      title={recipe.title}
                      url={recipe.source_url}
                    //   image_url={recipe.image_url}
                    //   handleClick={this.handlerecipesave}
                    //   buttonText="Save Recipe"
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
</Row>
</div>
</Container>

);
};
};

export default Main;