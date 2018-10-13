import React from "react";
// import formatDate from "../../utils/formatDate";
import { ListItem } from "../List";

const Recipe = ({ title, source_url, recipe, _id,  handleClick, buttonText, saved }) => (
  <ListItem>
    <h3>
      <em>{title}</em>{" "}
      <span className="btn-group pull-right">
        <a
          value={recipe}
          onClick={() => handleClick(title)}
          className="btn btn-light"
          href={source_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Recipe
        </a>
        <button onClick={() => handleClick(_id)} className="btn btn-primary">
          {buttonText}
        </button>
      </span>
    </h3>
   
  </ListItem>
);

export default Recipe;
