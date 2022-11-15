import React from "react";
import "../Homepage/Homepage.css";
import { Link } from "react-router-dom";

const Homepage = ({ handleClick, pokemon }) => {
  const data = pokemon.map((pictures) => {
    return (
      <Link to={`/description/${pictures.name}`}>
        <img className="Pokemon" id={pictures.name} src={pictures.image} />
      </Link>
      
    ); 
  }
  );
  return (
    <div onClick={handleClick} className="Container-Pokemon">
      {data}
    </div>
  );
};
export default Homepage;
