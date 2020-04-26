import React from "react";
import "./list.css";

function List() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Equipe</a>
        </li>
        <li>
          <a href="#">A Propos</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default List;
