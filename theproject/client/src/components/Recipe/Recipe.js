import React from "react";
// import formatDate from "../../utils/formatDate";
import { ListItem } from "../List";

const Recipe = ({ title, url, _id, image_url, handleClick, buttonText, saved }) => (
  <ListItem>
    <h3>
      <em>{title}</em>{" "}
      <span className="btn-group pull-right">
        <a
          className="btn btn-light"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Recipes
        </a>
        <button onClick={() => handleClick(_id)} className="btn btn-primary">
          {buttonText}
        </button>
      </span>
    </h3>
   
  </ListItem>
);

export default Recipe;
