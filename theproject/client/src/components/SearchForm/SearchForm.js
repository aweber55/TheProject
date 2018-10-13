import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="food" id="foodTitle">Food:</label>
      <input
        // action="/recipes"
        // method='POST'
        value={props.search}
        onChange={props.handleInputChange}
        name="food"
        list="foods"
        type="text"
        className="form-control"
        placeholder="type in your food"
        id="food"
      />
      {/* <datalist id="recipes._id">
        {props.recipes.map(recipes => <option value={recipes} key={recipes} />)}
      </datalist> */}
      
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-tw btn-outline-info waves-effect butnSubm"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
