import React from "react";
import { Link } from "react-router-dom";



const Nav = (props) => (



<ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link active" href="/">Home</a>
  </li>
  <li className="nav-item" >
  
    <a className="nav-link" href="/Main" >Main</a>
  </li>
  {/* <li className="nav-item">
          <Link
            to="/signup"
            className={
              window.location.pathname === "/signup"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Search
          </Link>
  
</li> */}
</ul>

);
export default Nav;
