import React from 'react';
import "./style.css";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid";
import SearchForm from "../SearchForm/SearchForm";

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
    };

    
    componentDidMount(){
       
        document.body.className="body-component-a" // Or set the class
    }


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
            // console.log(this.state.search);
            API.getBeer(this.state.search)

            .then(res => {
                
                
                
               
                // console.log(res.data);
                // console.log(res.data[0]);
                //  console.log(res.data[0].name);
                // console.log(res.data[0].tagline);
                // console.log(res.data[0].description);
                // console.log(res.data[0].food_pairing);
                // console.log(byArray);
                
                
                
                // console.log( beerName);
                // let foodArray = [];
                // const recipes = res.data.recipes;
                // console.log(res.data + "hello");
                this.setState({ myArray: byArray});
                this.setState({ beerName: res.data[0].name });
                this.setState({ beerId: res.data[0].id });
                this.setState({ beerPair: res.data[0].food_pairing });
                this.setState({ beerDesc: res.data[0].description });
                this.setState({ beerImg: res.data[0].image_url });
                
                
            })};
        handleInputChange = event => {
            this.setState({ search: event.target.value });
          };
          handleFormSubmit = event => {
            event.preventDefault();
            
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
    
  <div id="recipeCard">
    { this.state.recipes.map(recipes => <li onClick={this.recipeSave} key={recipes.recipe_id} id={recipes.recipe_id}>  {recipes.title}</li>)}
 </div>  
  {/* <div> 
    { this.state.foodArray.map(foodArray => <li  key={foodArray.id} id={foodArray._id}></li>)}
 </div>  */}
 <div>
    { this.state.beerPair.map((beerPair, index) => <li key={index} id={beerPair.beerPair_id} > {beerPair} + "hello"</li>)}
</div>



<div className="col-4">
  {/* <div><h1>{this.state.beerImg}</h1></div> */}
  <div><h1>{this.state.beerName}</h1></div>  
  <img  id="imageHolder"  src={this.state.beerImg} alt="#" className="img-responsive" />
</div> 
</div>
</Col>
</Row>
</div>
</Container>

);
};
};

export default Main;