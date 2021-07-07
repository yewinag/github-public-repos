import React from "react";
import { Link } from "react-router-dom";
import "../../styles/header.scss";
function Header() {
  return (
    <header>
      <Link to="/">
        <h3>GitHub Repositories</h3>
      </Link>
      <button className="add-new">Create New</button>
    </header>
  );
}

export default Header;
