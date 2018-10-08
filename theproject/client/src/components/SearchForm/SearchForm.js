import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="food">Food:</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="food"
        list="foods"
        type="text"
        className="form-control"
        placeholder="type in your food"
        id="food"
      />
      {/* <datalist id="recipes.id">
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
