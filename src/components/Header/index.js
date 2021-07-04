import React from "react";
import '../../styles/header.scss'
function Header() {
  return (
    <header>
      <h3>GitHub Repositories</h3>
      <button className="add-new">Create New</button>
    </header>
  );
}

export default Header;
