import React from "react";
/* header component, self explanatory. Always renders since the component exists outside of the switch in ./Layout/index.js */
function Header() {
  return (
    <header className="jumbotron bg-dark">
      <div className="container text-white">
        <h1 className="display-4">Flashcard-o-matic</h1>
        <p className="lead">Discover The Flashcard Difference.</p>
      </div>
    </header>
  );
}

export default Header;
