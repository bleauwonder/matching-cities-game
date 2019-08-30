import React from "react";

function Navbar({ message, score, topScore }) {
  return (
    <nav className="bg-nav fixed-top navbar nav-height nav-shadow p-0 tp-text">
      <ul className="row center list-inline m-0 nav-fill nav-height nav-width">
        <li className="col list-inline-item my-auto nav-calc-font p-0 m-0 text-center">
          <a className="nav-calc-font navbar-brand p-3 m-0" href="/">
            <em>Art Deco Memory Game</em>
          </a>
        </li>
        <li
          id="animate-this"
          className="col list-inline-item my-auto m-0 p-0 text-center"
        >
          {message}
        </li>
        <li className="nav-calc-font navbar-brand p-3 m-0">
          Current Score: {score} | Top Score: {topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;