import React from 'react';
import "./style.css";
import Nav from "../Nav";
import API from "../../utils/API";
import {Col, Container, Row} from "../Grid";
import SearchForm from "../SearchForm/SearchForm";

export default class Main extends React.Component {
    state = {
        recipes: [],
        beer: [],
        search: "",
        ingredients: "",
        title: "",
    };

    componentDidMount(){
       
        document.body.className="body-component-a" // Or set the class
    }


    handleClick = (key) => {
        console.log("hello" + key);
    }
    
    getFood = (keyword) => {
        this.setState({ search: keyword})
        // console.log(this.state.search);
        API.getFood(this.state.search)
        .then(res => {
            
            console.log(res.data);
            // const recipes = res.data.recipes;
            
            this.setState({ recipes: res.data.recipes });
        })}
        handleInputChange = event => {
            this.setState({ search: event.target.value });
          };
          handleFormSubmit = event => {
            event.preventDefault();
            
            this.getFood();
          };

          render() {
    
            return (
               
                <Container>
                    <div className="main">
            <Row>
                <Col size="col-4">

                <div className="results">
<SearchForm 
    handleFormSubmit={this.handleFormSubmit}
    handleInputChange={this.handleInputChange}/>
    
<div>
    { this.state.recipes.map(recipes => <li onClick={this.handleClick} key={recipes.recipe_id}> {recipes.title}</li>)}
</div>

</div> 
</Col>
</Row>
</div>
</Container>

);
};
};